import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
  bgGradient?: string;
  author: string;
  content?: string;
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Get all blog posts from MDX files
export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Generate a gradient if not specified
      const gradients = [
        'from-purple-500 via-pink-400 to-orange-300',
        'from-blue-500 via-teal-400 to-green-300',
        'from-cyan-400 via-teal-400 to-green-300',
        'from-indigo-500 via-purple-400 to-pink-300',
        'from-yellow-400 via-orange-400 to-red-400',
        'from-green-400 via-teal-400 to-blue-400',
      ];
      
      // Use slug hash to consistently pick a gradient
      const gradientIndex = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length;

      // Auto-generate cover image path if not specified
      // First check if a file with the same name as the slug exists
      let coverImage = data.coverImage;
      if (!coverImage) {
        // Check common image extensions
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
        for (const ext of imageExtensions) {
          const imagePath = `/images/blog/${slug}${ext}`;
          const fullImagePath = path.join(process.cwd(), 'public', imagePath);
          if (fs.existsSync(fullImagePath)) {
            coverImage = imagePath;
            break;
          }
        }
      }

      return {
        slug,
        title: data.title || 'Untitled',
        subtitle: data.subtitle,
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString(),
        readTime: data.readTime || '5 min read',
        tags: data.tags || [],
        coverImage,
        bgGradient: data.bgGradient || gradients[gradientIndex],
        author: data.author || 'Christian Duque',
        content,
      } as BlogPost;
    })
    // Sort posts by date (newest first)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const gradients = [
    'from-purple-500 via-pink-400 to-orange-300',
    'from-blue-500 via-teal-400 to-green-300',
    'from-cyan-400 via-teal-400 to-green-300',
    'from-indigo-500 via-purple-400 to-pink-300',
    'from-yellow-400 via-orange-400 to-red-400',
    'from-green-400 via-teal-400 to-blue-400',
  ];
  
  const gradientIndex = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length;

  // Auto-generate cover image path if not specified
  let coverImage = data.coverImage;
  if (!coverImage) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    for (const ext of imageExtensions) {
      const imagePath = `/images/blog/${slug}${ext}`;
      const fullImagePath = path.join(process.cwd(), 'public', imagePath);
      if (fs.existsSync(fullImagePath)) {
        coverImage = imagePath;
        break;
      }
    }
  }

  return {
    slug,
    title: data.title || 'Untitled',
    subtitle: data.subtitle,
    excerpt: data.excerpt || '',
    date: data.date || new Date().toISOString(),
    readTime: data.readTime || '5 min read',
    tags: data.tags || [],
    coverImage,
    bgGradient: data.bgGradient || gradients[gradientIndex],
    author: data.author || 'Christian Duque',
    content,
  };
}

// Get recent posts for home page
export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

// Get related posts (by tags)
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  
  // Score posts by number of matching tags
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const matchingTags = post.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return { post, score: matchingTags };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // If not enough related posts by tags, add recent posts
  const relatedPosts = scoredPosts.map(item => item.post).slice(0, limit);
  
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => post.slug !== currentSlug && !relatedPosts.find(p => p.slug === post.slug))
      .slice(0, limit - relatedPosts.length);
    
    relatedPosts.push(...recentPosts);
  }

  return relatedPosts.slice(0, limit);
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
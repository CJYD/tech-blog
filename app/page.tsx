import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Sample blog posts - matching the blog page exactly
const blogPosts = [
  {
    slug: 'future-of-ai-2025',
    title: 'AI Revolution',
    subtitle: 'The Future of Artificial Intelligence',
    excerpt: 'This post explores the cutting-edge developments in artificial intelligence and machine learning, examining how these technologies are reshaping software development, creative industries, and our daily interactions with technology.',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['AI', 'Future Tech', 'Machine Learning'],
    coverImage: '/images/blog/ai-future.jpg',
    bgGradient: 'from-purple-500 via-pink-400 to-orange-300',
    blogNumber: 2
  },
  {
    slug: 'building-with-nextjs-14',
    title: 'Next.js 14',
    subtitle: 'Building Modern Web Applications',
    excerpt: 'This comprehensive guide shares practical lessons learned from migrating large-scale applications to the app router, leveraging server components, and optimizing performance in production environments.',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    coverImage: '/images/blog/nextjs.png',
    bgGradient: 'from-blue-500 via-teal-400 to-green-300',
    blogNumber: 1
  }
];

// Get the latest post for featured display
const latestPost = blogPosts[0];
const previousPosts = blogPosts.slice(1);

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Minimal Tech Hero Section */}
        <section className="relative min-h-screen flex items-center bg-white">
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main headline - big and bold */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                <span className="block text-gray-900">The Latest in</span>
                <span className="block text-gray-900">
                  Tech & Software
                </span>
              </h1>
              
              {/* Simple tagline */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Reviews, insights, and thoughts on the newest phones, computers, gadgets, and the software that powers them.
              </p>
              
              {/* Topics - minimal badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-default">
                  Smartphones
                </span>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-default">
                  Computers
                </span>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-default">
                  Wearables
                </span>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-default">
                  Gaming
                </span>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-default">
                  AI Apps
                </span>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-default">
                  Software
                </span>
              </div>
              
              {/* Latest post preview - minimal card */}
              <div className="max-w-2xl mx-auto mb-12">
                <Link href={`/blog/${latestPost.slug}`}>
                  <div className="group border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 bg-white">
                    {/* Image */}
                    <div className={`relative h-64 bg-gradient-to-br ${latestPost.bgGradient} overflow-hidden`}>
                      {latestPost.coverImage ? (
                        <Image
                          src={latestPost.coverImage}
                          alt={latestPost.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 640px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/20 text-6xl font-bold">
                            {latestPost.blogNumber.toString().padStart(2, '0')}
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase">Latest Post</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 text-left">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {latestPost.title}: {latestPost.subtitle}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {latestPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{latestPost.readTime}</span>
                        <span className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* CTA buttons - simple and clean */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#timeline" 
                  className="px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
                >
                  Explore All Posts
                </Link>
                <Link 
                  href="/blog" 
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all"
                >
                  Blog Archive
                </Link>
              </div>
            </div>
          </div>
          
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Vertical Timeline Section */}
        <section id="timeline" className="bg-gray-50 py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Posts</h2>
              <p className="text-lg text-gray-600">Deep dives into modern technology</p>
            </div>
            
            <div className="max-w-6xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden lg:block"></div>
              
              {blogPosts.map((post, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={post.slug} className="relative mb-16 lg:mb-20">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-900 rounded-full hidden lg:block"></div>
                    
                    <div className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Image side */}
                      <div className="w-full lg:w-1/2">
                        <Link href={`/blog/${post.slug}`}>
                          <div className={`relative h-64 bg-gradient-to-br ${post.bgGradient} overflow-hidden group cursor-pointer`}>
                            {post.coverImage ? (
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white/30 text-8xl font-bold">
                                  {post.blogNumber.toString().padStart(2, '0')}
                                </div>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                            
                            {/* Blog badge */}
                            <div className="absolute top-4 left-4 flex items-center gap-2">
                              <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-bold uppercase">
                                Blog {post.blogNumber.toString().padStart(2, '0')}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      
                      {/* Content side */}
                      <div className="w-full lg:w-1/2">
                        <div className={`${isLeft ? 'lg:pl-12' : 'lg:pr-12'}`}>
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-lg text-gray-700 mb-3">{post.subtitle}</p>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            Read More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* View all button */}
            <div className="text-center mt-16">
              <Link 
                href="/blog" 
                className="inline-block px-8 py-4 bg-gray-900 text-white font-bold tracking-wider hover:bg-gray-800 transition-colors"
              >
                VIEW ALL POSTS
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
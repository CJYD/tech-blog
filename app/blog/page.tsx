import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Sample blog posts - in production this would come from MDX files or CMS
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
    blogNumber: 2  // Second blog chronologically
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
    blogNumber: 1  // First blog chronologically
  }
];

// Get unique tags for filtering
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Magazine Header */}
        <section className="bg-gray-50">
          <div className="container py-12">
            <div className="inline-block border-2 border-gray-900 px-6 py-3">
              <h1 className="text-2xl font-bold tracking-tight leading-none">BLOG</h1>
            </div>
          </div>
        </section>

        {/* Blog Posts - Magazine Style */}
        <section className="container py-12">
          <div className="space-y-12">
            {blogPosts.map((post, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <React.Fragment key={post.slug}>
                  <article
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-fade-in ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                  {/* Image Section */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="flex-1 group relative overflow-hidden shadow-2xl"
                  >
                    <div className={`relative h-[300px] lg:h-[360px] w-full overflow-hidden bg-gradient-to-br ${post.bgGradient}`}>
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
                          <div className="text-white/20 text-[200px] font-bold">
                            {(index + 1).toString().padStart(2, '0')}
                          </div>
                        </div>
                      )}
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                    </div>
                  </Link>

                  {/* Content Section */}
                  <div className="flex-1 space-y-4 lg:space-y-6">
                    {/* Blog Number Badge */}
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="border-2 border-gray-900 px-4 py-3 self-center">
                        <div className="text-xs font-bold tracking-wider text-gray-700">
                          BLOG {post.blogNumber.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs font-medium text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            year: 'numeric' 
                          }).toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-none">
                          {post.title}
                        </h2>
                        {post.subtitle && (
                          <p className="text-xl text-gray-600 mt-2">
                            {post.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:gap-4 transition-all text-gray-900 hover:text-gray-900"
                      style={{ textDecoration: 'none' }}
                    >
                      READ NOW
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
                
                {/* Separator between blog posts */}
                {index < blogPosts.length - 1 && (
                  <hr className="border-t border-gray-200 my-16" />
                )}
              </React.Fragment>
              );
            })}
          </div>

        </section>
      </main>
      
      <Footer />
    </div>
  );
}
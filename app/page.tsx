import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TerminalAnimation from '@/components/TerminalAnimation';
import EmailSubscribe from '@/components/EmailSubscribe';
import { getRecentPosts } from '@/lib/blog';

export default function Home() {
  // Get recent blog posts dynamically
  const blogPosts = getRecentPosts(5); // Get 5 most recent posts
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        {/* Terminal Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-white pt-16">
          <div className="relative z-10 px-4 w-full max-w-5xl mx-auto">
            <div className="text-center mb-8">
              {/* Main headline */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
                <span className="block">The Latest in</span>
                <span className="block">Tech & Software</span>
              </h1>
            </div>
            
            {/* Terminal Animation */}
            <TerminalAnimation />
          </div>
          
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 -z-10 opacity-30 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
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
                const blogNumber = blogPosts.length - index; // Calculate blog number (oldest = 1)
                
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
                                  {blogNumber.toString().padStart(2, '0')}
                                </div>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                            
                            {/* Blog badge */}
                            <div className="absolute top-4 left-4 flex items-center gap-2">
                              <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-bold uppercase">
                                Blog {blogNumber.toString().padStart(2, '0')}
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
                            <Link href={`/blog/${post.slug}`} className="hover:text-cyan-400 transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          
                          {post.subtitle && (
                            <p className="text-lg text-gray-700 mb-3">{post.subtitle}</p>
                          )}
                          
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
                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-cyan-400 transition-colors"
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

        {/* Email Subscribe Section */}
        <EmailSubscribe />
      </main>
      
      <Footer />
    </div>
  );
}
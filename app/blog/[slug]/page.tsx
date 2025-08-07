import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Type definitions for MDX components
interface MDXComponentProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

interface CodeComponentProps extends MDXComponentProps {
  className?: string;
}

// Custom components for MDX
const components = {
  h1: (props: MDXComponentProps) => <h1 className="text-4xl font-bold text-gray-900 mb-4" {...props} />,
  h2: (props: MDXComponentProps) => <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4" {...props} />,
  h3: (props: MDXComponentProps) => <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3" {...props} />,
  p: (props: MDXComponentProps) => <p className="text-gray-700 leading-relaxed mb-6" {...props} />,
  a: (props: MDXComponentProps) => <a className="text-cyan-400 no-underline hover:underline" {...props} />,
  ul: (props: MDXComponentProps) => <ul className="list-disc pl-6 space-y-2 mb-6" {...props} />,
  ol: (props: MDXComponentProps) => <ol className="list-decimal pl-6 space-y-2 mb-6" {...props} />,
  li: (props: MDXComponentProps) => <li className="text-gray-700" {...props} />,
  blockquote: (props: MDXComponentProps) => (
    <blockquote className="border-l-4 border-cyan-400 pl-4 text-gray-600 italic my-6" {...props} />
  ),
  code: ({ children, ...props }: CodeComponentProps) => {
    // Check if this is an inline code block
    const isInline = !props.className;
    if (isInline) {
      return (
        <code className="text-orange-500 bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
          {children}
        </code>
      );
    }
    return <code {...props}>{children}</code>;
  },
  pre: (props: MDXComponentProps) => (
    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-6" {...props} />
  ),
  hr: (props: MDXComponentProps) => <hr className="border-t border-gray-200 my-8" {...props} />,
  table: (props: MDXComponentProps) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: MDXComponentProps) => (
    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
  ),
  td: (props: MDXComponentProps) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" {...props} />
  ),
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <article className="container py-16 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                ← Back to Blog
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl text-gray-600 mb-4">{post.subtitle}</p>
            )}
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none">
            <MDXRemote
              source={post.content || ''}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  ],
                },
              }}
              components={components}
            />
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Enjoyed this article? Share it with others:
              </div>
              <div className="flex gap-4">
                <button className="text-gray-600 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.284 7.342m0 2.684A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.284-7.342" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio - Static for all posts */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                CD
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Christian Duque</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Software developer passionate about AI, web development, and building tools that make life better. 
                  I write about technology, productivity, and the future of digital innovation.
                </p>
                <Link href="/about" className="text-sm text-cyan-400 hover:text-cyan-500">
                  Learn more about me →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-4 border border-gray-200 rounded-lg hover:border-cyan-400 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-cyan-400 transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
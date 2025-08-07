import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Mock post data - in production, this would be fetched based on the slug
  const post = {
    title: 'The Future of AI: What to Expect in 2025',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI',
    tags: ['AI', 'Future Tech', 'Machine Learning'],
    author: 'Christian Duque',
    content: `
      <h2>The Current State of AI</h2>
      <p>As we enter 2025, AI has already transformed numerous industries. Large Language Models (LLMs) have become increasingly sophisticated, capable of understanding context and nuance in ways that seemed impossible just a few years ago.</p>
      
      <pre><code># Example of modern AI capabilities
def analyze_sentiment(text):
    """
    Modern AI can understand complex emotions and context
    """
    return ai_model.analyze(text, context="emotional_intelligence")</code></pre>
      
      <h2>Key Developments to Watch</h2>
      
      <h3>1. Multimodal AI Systems</h3>
      <p>The integration of different AI modalities - text, image, audio, and video - is creating more comprehensive and capable systems. These systems can understand and generate content across multiple formats simultaneously.</p>
      
      <h3>2. AI in Healthcare</h3>
      <p>Healthcare is experiencing a revolution with AI applications in diagnosis, drug discovery, and personalized treatment. Machine learning models are now capable of detecting diseases earlier and more accurately than ever before.</p>
      
      <h3>3. Autonomous Systems</h3>
      <p>From self-driving cars to autonomous drones, AI-powered systems are becoming more reliable and widespread. The improvements in computer vision and decision-making algorithms have made these systems safer and more efficient.</p>
      
      <h2>Ethical Considerations</h2>
      <blockquote>
        <p>"With great power comes great responsibility. As we develop more capable AI systems, we must ensure they are aligned with human values and used for the benefit of all."</p>
      </blockquote>
      
      <p>The rapid advancement of AI technology brings with it important ethical questions. How do we ensure AI systems are fair and unbiased? How do we protect privacy while leveraging data for innovation? These are questions we must address as a society.</p>
      
      <h2>What This Means for Developers</h2>
      <p>For developers, the AI revolution presents both opportunities and challenges:</p>
      <ul>
        <li>Learning to work with AI tools and APIs will become essential</li>
        <li>Understanding AI limitations and biases is crucial for responsible development</li>
        <li>New programming paradigms are emerging around AI-assisted coding</li>
        <li>The demand for AI-skilled developers continues to grow exponentially</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>The future of AI is not just about technology - it's about how we choose to use it. The convergence of AI with other technologies like quantum computing, biotechnology, and robotics will create possibilities we can barely imagine today.</p>
      
      <p>As we move forward, it's essential to stay informed, continue learning, and actively participate in shaping how AI technology develops and is deployed. The decisions we make today will determine the AI-powered world of tomorrow.</p>
    `
  };

  // Related posts
  const relatedPosts = [
    { 
      slug: 'building-with-nextjs-14', 
      title: 'Building Modern Web Apps with Next.js 14', 
      date: '2024-01-10',
      readTime: '12 min read'
    },
    { 
      slug: 'typescript-best-practices', 
      title: 'TypeScript Best Practices for 2024', 
      date: '2024-01-08',
      readTime: '10 min read'
    },
    { 
      slug: 'productivity-apps-2024', 
      title: 'Top 10 Productivity Apps That Changed My Workflow', 
      date: '2024-01-12',
      readTime: '8 min read'
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <article className="container py-16 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link href="/blog" className="hover:text-terminal-blue transition-colors">
                ← Back to Blog
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-gray max-w-none
              prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-gray-900 prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-900 prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-terminal-blue prose-a:no-underline hover:prose-a:underline
              prose-code:text-terminal-orange prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg prose-pre:p-4
              prose-blockquote:border-l-4 prose-blockquote:border-terminal-blue prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-blockquote:italic
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Enjoyed this article? Share it with others:
              </div>
              <div className="flex gap-4">
                <button className="text-gray-600 hover:text-terminal-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-terminal-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-terminal-blue transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.284 7.342m0 2.684A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.284-7.342" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-terminal-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                CD
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Christian Duque</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Software developer passionate about AI, web development, and building tools that make life better. 
                  I write about technology, productivity, and the future of digital innovation.
                </p>
                <Link href="/about" className="text-sm text-terminal-blue hover:underline">
                  Learn more about me →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block p-4 border border-gray-200 rounded-lg hover:border-terminal-blue transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-terminal-blue transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <div className="text-sm text-gray-500">
                    <span>{relatedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
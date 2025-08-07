import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Terminal-style error box */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8 text-left font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-400 text-xs">~/tech-blog</span>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400">
                <span className="text-cyan-400">$</span> cd /page-not-found
              </div>
              <div className="text-red-400">
                bash: cd: /page-not-found: No such file or directory
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">$</span> echo &quot;Error 404&quot;
              </div>
              <div className="text-white">
                Error 404
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">$</span> ls -la /available-pages/
              </div>
              <div className="text-gray-300 ml-4">
                <div>drwxr-xr-x  home/</div>
                <div>drwxr-xr-x  blog/</div>
                <div>drwxr-xr-x  about/</div>
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">$</span> <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Go Home
            </Link>
            <Link 
              href="/blog"
              className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Blog
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <Link href="/" className="text-cyan-400 hover:text-cyan-500 transition-colors">
                Home
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-500 transition-colors">
                Blog
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/about" className="text-cyan-400 hover:text-cyan-500 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
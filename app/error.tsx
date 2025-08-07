'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
                <span className="text-cyan-400">$</span> npm run dev
              </div>
              <div className="text-red-400">
                Error: Something went wrong!
              </div>
              <div className="text-orange-400 ml-4">
                at renderPage (./app/page.tsx:42)
              </div>
              <div className="text-orange-400 ml-4">
                at processRequest (./lib/server.ts:15)
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">$</span> echo $?
              </div>
              <div className="text-red-400">
                1
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">$</span> npm run reset
              </div>
              <div className="text-green-400">
                Resetting application state...
              </div>
              <div className="text-gray-400">
                <span className="text-cyan-400">$</span> <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">500</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Something went wrong!</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-2">
              An unexpected error occurred. Don't worry, we've logged this issue 
              and will look into it.
            </p>
            {error.digest && (
              <p className="text-xs text-gray-400 font-mono">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Try Again
            </button>
            <Link 
              href="/"
              className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Go Home
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Need help? Try these pages:</p>
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
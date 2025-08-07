import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-semibold text-gray-900 mb-3">
              <span className="terminal-prompt">echo &quot;Tech Blog&quot;</span>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Exploring the intersection of technology and creativity. 
              Thoughts on AI, productivity, and building things that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-gray-600 hover:text-terminal-blue transition-colors">
                Home
              </Link>
              <Link href="/blog" className="block text-sm text-gray-600 hover:text-terminal-blue transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block text-sm text-gray-600 hover:text-terminal-blue transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-terminal-blue transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-terminal-blue transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-terminal-blue transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="/rss.xml" 
                className="block text-sm text-gray-600 hover:text-terminal-blue transition-colors"
              >
                RSS Feed
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Christian Duque. Built with Next.js and TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
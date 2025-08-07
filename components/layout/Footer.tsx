import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-200">
      <div className="container py-6">
        <div className="relative flex items-center justify-center">
          {/* Left side - Copyright (absolute positioned) */}
          <div className="absolute left-0 text-xs text-gray-600 hidden sm:block">
            © {currentYear} {siteConfig.author.name}
          </div>

          {/* Center - Nav links (always centered) */}
          <div className="flex items-center gap-6 text-xs">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>

          {/* Right side - Social links (absolute positioned) */}
          <div className="absolute right-0 flex items-center gap-4 text-xs hidden sm:flex">
            <a 
              href={siteConfig.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a 
              href={siteConfig.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
        
        {/* Mobile only - copyright below */}
        <div className="text-center mt-4 text-xs text-gray-600 sm:hidden">
          © {currentYear} Christian Duque
        </div>
      </div>
    </footer>
  );
}
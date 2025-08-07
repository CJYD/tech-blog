'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-gray-900 hover:text-cyan-400 transition-colors">
          <span className="terminal-prompt">cd ~/devnotes</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/" className={`text-sm transition-colors ${isActive('/')}`}>
            Home
          </Link>
          <Link href="/blog" className={`text-sm transition-colors ${isActive('/blog')}`}>
            Blog
          </Link>
          <Link href="/about" className={`text-sm transition-colors ${isActive('/about')}`}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
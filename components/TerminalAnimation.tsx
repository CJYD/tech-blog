'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'comment';
  speed?: number; // characters per second
}

export default function TerminalAnimation() {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const lines = useMemo<TerminalLine[]>(() => [
    { text: '$ whoami', type: 'command', speed: 30 },
    { text: 'Tech enthusiast & software developer', type: 'output', speed: 50 },
    { text: '', type: 'output' },
    { text: '$ cat blog-purpose.txt', type: 'command', speed: 30 },
    { text: 'Welcome to my tech blog where I explore:', type: 'output', speed: 50 },
    { text: '• Latest innovations in technology', type: 'output', speed: 50 },
    { text: '• Deep technical insights & tutorials', type: 'output', speed: 50 },
    { text: '• My journey through the evolving world of tech', type: 'output', speed: 50 },
    { text: '', type: 'output' },
    { text: '$ ls recent-posts/', type: 'command', speed: 30 },
    { text: 'ai-revolution-2025.md', type: 'output', speed: 50 },
    { text: 'nextjs-14-guide.md', type: 'output', speed: 50 },
    { text: 'tech-trends-analysis.md', type: 'output', speed: 50 },
    { text: '', type: 'output' },
    { text: '$ echo "Let\'s explore together!"', type: 'command', speed: 30 },
    { text: "Let's explore together!", type: 'output', speed: 50 },
  ], []);

  // Initialize displayed text array with empty strings
  useEffect(() => {
    setDisplayedText(lines.map(() => ''));
  }, [lines]);

  // Typewriter effect
  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];
    const speed = currentLine.speed || 50;
    
    // If it's an empty line, skip to next line immediately
    if (currentLine.text === '') {
      setDisplayedText(prev => {
        const newText = [...prev];
        newText[currentLineIndex] = '';
        return newText;
      });
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 100);
      return () => clearTimeout(timer);
    }

    // Type character by character
    if (currentCharIndex < currentLine.text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => {
          const newText = [...prev];
          newText[currentLineIndex] = currentLine.text.slice(0, currentCharIndex + 1);
          return newText;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, 1000 / speed);
      return () => clearTimeout(timer);
    } else {
      // Line complete, move to next line after a pause
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines]);

  // Cursor blink
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Terminal Window */}
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 relative flex items-center">
          <div className="flex gap-2 absolute left-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm font-mono">tech-blog@terminal:~</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base" style={{ minHeight: '380px' }}>
          <div className="space-y-1">
            {lines.map((line, index) => (
              <div
                key={index}
                className={`min-h-[24px] ${
                  line.type === 'command' 
                    ? 'text-cyan-400' 
                    : line.type === 'comment'
                    ? 'text-gray-500'
                    : 'text-gray-300'
                }`}
              >
                {displayedText[index]}
                {/* Show cursor at the current typing position */}
                {index === currentLineIndex && !isTypingComplete && (
                  <span 
                    className={`inline-block w-2 h-4 bg-cyan-400 ml-0.5 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
                {/* Show cursor at the end when typing is complete */}
                {index === lines.length - 1 && isTypingComplete && (
                  <span 
                    className={`inline-block w-2 h-4 bg-cyan-400 ml-0.5 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Buttons - Closer to terminal */}
      <div className="mt-6 flex items-center justify-center" style={{ minHeight: '60px' }}>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="#timeline" 
            className="px-6 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors text-center rounded"
          >
            Recent Posts
          </a>
          <Link 
            href="/blog" 
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all text-center rounded"
          >
            Blog Archive
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
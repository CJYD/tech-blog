'use client';

import React, { useState, useEffect } from 'react';
// ThemeContext not yet implemented - component disabled for now
// import { useTheme } from '../contexts/ThemeContext';

// This component is currently disabled as the ThemeContext is not yet implemented
// To enable theme switching, implement ThemeContext first
export default function ThemeToggle() {
  // const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <span className="w-4 h-4 inline-block"></span>
      </button>
    );
  }

  return (
    <button
      // onClick={toggleTheme}
      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors opacity-50 cursor-not-allowed"
      aria-label="Toggle theme (coming soon)"
      disabled
    >
      {/* {theme === 'dark' ? '☀️' : '🌙'} */}
      🌙
    </button>
  );
}
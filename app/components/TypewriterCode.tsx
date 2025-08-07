'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

interface CodeSegment {
  text: string;
  className?: string;
}

interface CodeLine {
  indent: number; // 0 = no indent, 1 = pl-4, 2 = pl-8
  segments: CodeSegment[];
}

interface TypewriterCodeProps {
  lines: CodeLine[];
  charDelay?: number; // milliseconds per character
  lineDelay?: number; // milliseconds between lines
  startDelay?: number; // milliseconds before starting
  className?: string;
}

const TypewriterCode: React.FC<TypewriterCodeProps> = React.memo(({
  lines,
  charDelay = 15,
  startDelay = 100,
  className = ''
}) => {
  const [visibleChars, setVisibleChars] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize expensive calculations
  const { totalChars, lineCharCounts } = useMemo(() => {
    const counts: number[] = [];
    let total = 0;
    
    lines.forEach(line => {
      const lineTotal = line.segments.reduce((lineTotal, seg) => lineTotal + seg.text.length, 0);
      counts.push(lineTotal);
      total += lineTotal;
    });
    
    return { totalChars: total, lineCharCounts: counts };
  }, [lines]);

  // Simple intersection observer for in-view detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '-100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleChars >= totalChars) return;

    const timer = setTimeout(() => {
      setVisibleChars(prev => prev + 1);
    }, visibleChars === 0 ? startDelay : charDelay);

    return () => clearTimeout(timer);
  }, [visibleChars, totalChars, charDelay, startDelay, hasStarted]);

  const getIndentClass = useCallback((indent: number) => {
    switch (indent) {
      case 1: return 'pl-4';
      case 2: return 'pl-8';
      default: return '';
    }
  }, []);

  // Memoize character position calculations
  const lineCharPositions = useMemo(() => {
    const positions: number[] = [];
    let total = 0;
    
    lineCharCounts.forEach(count => {
      positions.push(total);
      total += count;
    });
    
    return positions;
  }, [lineCharCounts]);

  const renderLine = useCallback((line: CodeLine, lineIndex: number) => {
    const indentClass = getIndentClass(line.indent);
    const charsBeforeLine = lineCharPositions[lineIndex];
    let charCount = charsBeforeLine;

    return (
      <div
        key={lineIndex}
        className={`${indentClass} whitespace-nowrap`}
      >
        {line.segments.map((segment, segIndex) => {
          const chars = segment.text.split('').map((char, charIndex) => {
            const globalCharIndex = charCount++;
            const isVisible = globalCharIndex < visibleChars;
            
            return (
              <span
                key={`${segIndex}-${charIndex}`}
                style={{ opacity: isVisible ? 1 : 0 }}
                className={segment.className || ''}
              >
                {char}
              </span>
            );
          });
          
          return <span key={segIndex}>{chars}</span>;
        })}
      </div>
    );
  }, [getIndentClass, lineCharPositions, visibleChars]);

  return (
    <div ref={containerRef} className={`font-mono text-xs space-y-3 ${className}`}>
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
});

TypewriterCode.displayName = 'TypewriterCode';

export default TypewriterCode;
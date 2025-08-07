'use client';

import { useState, useEffect } from 'react';

interface CodeSegment {
  text: string;
  className?: string;
}

interface CodeLine {
  indent: number;
  segments: CodeSegment[];
}

interface TypewriterCodeProps {
  lines: CodeLine[];
  charDelay?: number;
  lineDelay?: number;
  startDelay?: number;
  showCursor?: boolean;
}

export default function TypewriterCode({
  lines,
  charDelay = 15,
  lineDelay = 50,
  startDelay = 500,
  showCursor = true,
}: TypewriterCodeProps) {
  const [displayedLines, setDisplayedLines] = useState<number>(0);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [currentSegment, setCurrentSegment] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState<number>(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      if (lines.length > 0) {
        setDisplayedLines(1);
      }
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [lines, startDelay]);

  useEffect(() => {
    if (displayedLines === 0 || currentLine >= lines.length) return;

    const line = lines[currentLine];
    const segment = line.segments[currentSegment];
    
    if (!segment) {
      // Move to next line
      if (currentLine < lines.length - 1) {
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentSegment(0);
          setCurrentChar(0);
          setDisplayedLines(displayedLines + 1);
        }, lineDelay);
      }
      return;
    }

    if (currentChar < segment.text.length) {
      // Type next character
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, charDelay);
      return () => clearTimeout(timer);
    } else if (currentSegment < line.segments.length - 1) {
      // Move to next segment
      setCurrentSegment(currentSegment + 1);
      setCurrentChar(0);
    } else {
      // Line complete, move to next line
      if (currentLine < lines.length - 1) {
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentSegment(0);
          setCurrentChar(0);
          setDisplayedLines(displayedLines + 1);
        }, lineDelay);
      }
    }
  }, [displayedLines, currentLine, currentSegment, currentChar, lines, charDelay, lineDelay]);

  const renderLine = (line: CodeLine, lineIndex: number) => {
    const indentClass = line.indent === 1 ? 'pl-8' : line.indent === 2 ? 'pl-16' : '';
    const isCurrentLine = lineIndex === currentLine;
    const showLine = lineIndex < displayedLines;

    if (!showLine) return null;

    return (
      <div key={lineIndex} className={`${indentClass} min-h-[1.5rem]`}>
        {line.segments.map((segment, segmentIndex) => {
          const isCurrentSegment = isCurrentLine && segmentIndex === currentSegment;
          const isPastSegment = isCurrentLine && segmentIndex < currentSegment;
          const isBeforeCurrent = lineIndex < currentLine;
          
          let displayText = '';
          if (isBeforeCurrent || isPastSegment) {
            displayText = segment.text;
          } else if (isCurrentSegment) {
            displayText = segment.text.slice(0, currentChar);
          }

          return (
            <span key={segmentIndex} className={segment.className || 'text-gray-900'}>
              {displayText}
            </span>
          );
        })}
        {showCursor && isCurrentLine && currentLine < lines.length - 1 && (
          <span className="cursor"></span>
        )}
      </div>
    );
  };

  return (
    <div className="font-mono text-sm bg-gray-50 border border-gray-200 rounded-lg p-6 overflow-x-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-500">tech-blog.tsx</span>
      </div>
      <div className="space-y-0">
        {lines.map((line, index) => renderLine(line, index))}
      </div>
    </div>
  );
}
import Image from 'next/image'
import Link from 'next/link'
import { AnchorHTMLAttributes, HTMLAttributes } from 'react'

interface MDXComponentProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

const MDXComponents = {
  Image,
  a: ({ href, children, ...props }: AnchorProps) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
    
    if (isInternal) {
      return (
        <Link href={href} {...props} className="text-cyan-400 hover:text-cyan-500">
          {children}
        </Link>
      )
    }
    
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-500"
        {...props}
      >
        {children}
      </a>
    )
  },
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 font-mono" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-3xl font-semibold mt-6 mb-3 font-mono" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-2xl font-semibold mt-4 mb-2 font-mono" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="my-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc list-inside my-4 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal list-inside my-4 space-y-2" {...props}>
      {children}
    </ol>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: MDXComponentProps) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: MDXComponentProps) => (
    <pre
      className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
      {...props}
    >
      {children}
    </pre>
  ),
}

export default MDXComponents
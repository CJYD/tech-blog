import type { MDXComponents } from 'mdx/types'
import MDXComponentsSet from '@/components/MDXComponents'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...MDXComponentsSet,
  }
}
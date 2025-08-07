// Site configuration - update these values for your deployment
export const siteConfig = {
  // Site information
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Tech Blog',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Exploring Digital Innovation',
  
  // Author information
  author: {
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME || 'Christian Duque',
    email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL || 'your-email@example.com',
    twitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || '@yourhandle',
    github: process.env.NEXT_PUBLIC_AUTHOR_GITHUB || 'https://github.com',
    linkedin: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN || 'https://linkedin.com',
  },
  
  // Social links
  social: {
    github: process.env.NEXT_PUBLIC_AUTHOR_GITHUB || 'https://github.com',
    twitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER 
      ? `https://twitter.com/${process.env.NEXT_PUBLIC_AUTHOR_TWITTER.replace('@', '')}`
      : 'https://twitter.com',
    linkedin: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN || 'https://linkedin.com',
  },
  
  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
    vercelAnalyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID || '',
  },
}
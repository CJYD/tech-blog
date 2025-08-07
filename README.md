# Tech Blog

A modern, minimalist tech blog built with Next.js 15, TypeScript, and MDX. Features a clean design inspired by developer aesthetics, with full support for dark mode, mobile responsiveness, and newsletter subscriptions.

## Features

- 📱 **Mobile-First Design** - Optimized for all devices
- 🌓 **Dark/Light Mode** - System preference detection with manual toggle
- ✍️ **MDX Support** - Write posts in Markdown with React components
- 📧 **Newsletter Integration** - ConvertKit API for email subscriptions
- ⚡ **Lightning Fast** - Static generation with Next.js 15
- 🔍 **SEO Optimized** - Sitemap, meta tags, and Open Graph support
- 🎨 **JetBrains Mono Font** - With ligature support for code blocks
- 🚀 **Ready for Vercel** - One-click deployment

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Email**: ConvertKit
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- ConvertKit account (optional, for newsletter)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tech-blog.git
cd tech-blog
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your ConvertKit API credentials:
```
CONVERTKIT_API_KEY=your_api_key_here
CONVERTKIT_FORM_ID=your_form_id_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your blog.

## Project Structure

```
tech-blog/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Layout/           # Header & Footer
│   ├── Newsletter.tsx    # Email signup
│   └── ThemeToggle.tsx   # Dark mode toggle
├── content/              # MDX blog posts
│   └── posts/           # Blog post files
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Writing Blog Posts

Create new blog posts as MDX files in `content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-20"
author: "Your Name"
excerpt: "A brief description of your post"
tags: ["Tech", "AI", "Review"]
readTime: "5 min read"
---

# Your Post Title

Your content here...
```

## Customization

### Update Site Information

Edit `app/layout.tsx` to update:
- Site title and description
- Author information
- Social media links

### Styling

- Tailwind configuration: Edit CSS variables in `app/globals.css`
- Fonts: Configured in `app/layout.tsx`
- Colors: Update Tailwind classes throughout components

### ConvertKit Setup

1. Sign up at [ConvertKit](https://convertkit.com)
2. Create a form in your ConvertKit dashboard
3. Get your API key from Account Settings
4. Add credentials to `.env.local`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

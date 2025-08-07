# Tech Blog

A modern, performant tech blog built with Next.js 15, TypeScript, and MDX. Features a clean, terminal-inspired design with full SEO optimization and newsletter integration.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)
![MDX](https://img.shields.io/badge/MDX-3.0-yellow)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

## ✨ Features

- 📝 **MDX Blog Posts** - Write posts in Markdown with React component support
- 🎨 **Terminal-Inspired Design** - Unique, developer-friendly aesthetic
- 🚀 **Optimized Performance** - Static generation, image optimization, minimal bundle size
- 📱 **Fully Responsive** - Looks great on all devices
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap
- 📧 **Newsletter Integration** - ConvertKit integration for email subscriptions
- 🔒 **Security Headers** - Production-ready security configurations
- ⚡ **Fast Builds** - Optimized for Netlify deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

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

3. Create environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Your Blog Name"
NEXT_PUBLIC_AUTHOR_NAME="Your Name"
# Add ConvertKit credentials if using newsletter
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_form_id
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

## 📁 Project Structure

```
tech-blog/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   └── Layout/           # Header/Footer components
├── content/              # Blog content
│   └── posts/           # MDX blog posts
├── lib/                  # Utility functions
│   ├── blog.ts          # Blog post utilities
│   └── site-config.ts   # Site configuration
├── public/              # Static assets
└── styles/             # Global styles
```

## ✍️ Writing Blog Posts

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: 'My Awesome Post'
date: '2024-01-15'
excerpt: 'A brief description of your post'
tags: ['nextjs', 'react', 'typescript']
readTime: '5 min read'
---

# Your content here

Write your post using Markdown and React components!
```

See `content/posts/blog-post-template.mdx.example` for a complete template.

## 🚢 Deploy to Netlify

### Option 1: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/CJYD/tech-blog)

### Option 2: Manual Deploy

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/tech-blog.git
git push -u origin main
```

2. **Connect to Netlify:**
   - Log in to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure Build Settings:**
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

4. **Set Environment Variables:**
   - Go to Site Configuration → Environment Variables
   - Add your production variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
     NEXT_PUBLIC_SITE_NAME="Your Blog Name"
     CONVERTKIT_API_KEY=your_api_key
     CONVERTKIT_FORM_ID=your_form_id
     ```

5. **Deploy!** Your site will be live at `https://your-site-name.netlify.app`

### Netlify Configuration

The project includes a `netlify.toml` file for optimal configuration. You can customize it as needed.

## 🔧 Configuration

### Environment Variables

See `.env.local.example` for all available environment variables.

**Required for production:**
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `CONVERTKIT_API_KEY` - For newsletter functionality
- `CONVERTKIT_FORM_ID` - For newsletter functionality

### Site Configuration

Edit `lib/site-config.ts` to update:
- Site name and description
- Author information
- Social media links

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Content:** [MDX](https://mdxjs.com/)
- **Newsletter:** [ConvertKit](https://convertkit.com/)
- **Deployment:** [Netlify](https://www.netlify.com/)

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+ Performance
- 📦 **Bundle Size:** <100KB shared JS
- 🖼️ **Image Optimization:** Automatic with Next.js Image
- 🚀 **Static Generation:** Pre-rendered pages for speed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this for your own blog!

## 🐛 Support

If you encounter any issues:
1. Check the [deployment guide](./DEPLOYMENT.md)
2. Open an issue on GitHub
3. Contact me on Twitter

---

Built with ❤️ using Next.js and deployed on Netlify
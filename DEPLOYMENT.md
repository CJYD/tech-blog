# Deployment Guide

Complete guide for deploying your tech blog to Netlify or other platforms.

## 🚀 Quick Deploy to Netlify

### Option 1: One-Click Deploy (Easiest)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/tech-blog)

### Option 2: GitHub Integration (Recommended)

1. **Prepare your repository:**
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Tech Blog"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/tech-blog.git

# Push to GitHub
git push -u origin main
```

2. **Deploy on Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository
   - Netlify will auto-detect Next.js settings

3. **Verify Build Settings:**
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Functions directory:** `netlify/functions` (if using)

4. **Add Environment Variables:**
   - Go to Site Configuration → Environment Variables
   - Click "Add a variable"
   - Add each variable:
     ```
     NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
     NEXT_PUBLIC_SITE_NAME="Your Blog Name"
     NEXT_PUBLIC_AUTHOR_NAME="Your Name"
     NEXT_PUBLIC_AUTHOR_GITHUB=https://github.com/yourusername
     NEXT_PUBLIC_AUTHOR_TWITTER=@yourhandle
     CONVERTKIT_API_KEY=your_api_key
     CONVERTKIT_FORM_ID=your_form_id
     ```

5. **Deploy!** Click "Deploy site"

## Pre-Deployment Checklist

### 1. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

**Required variables:**
- `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://yourblog.com)
- `CONVERTKIT_API_KEY` - Your ConvertKit API key (for newsletter)
- `CONVERTKIT_FORM_ID` - Your ConvertKit form ID

**Optional variables:**
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Google Analytics tracking ID
- Social media links and author information

### 2. Update Site Configuration

Edit `/lib/site-config.ts` if you need to hardcode any values instead of using environment variables.

### 3. Update Image Domains

If you're using external images, update the allowed domains in `next.config.mjs`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-domain.com',
    },
  ],
},
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Import in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

### Option 3: Self-Hosted

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. Use a process manager like PM2:
```bash
pm2 start npm --name "tech-blog" -- start
```

4. Set up Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Netlify-Specific Features

### Custom Domain

1. Go to Domain Management in Netlify
2. Add your custom domain
3. Configure DNS settings:
   - Option A: Use Netlify DNS (recommended)
   - Option B: Point your domain's A record to Netlify

### Automatic HTTPS

Netlify provides free SSL certificates automatically. Once your domain is configured:
1. Go to Domain Management → HTTPS
2. Click "Verify DNS configuration"
3. SSL will be provisioned automatically

### Deploy Previews

Every pull request gets its own preview URL:
- Automatic builds for each PR
- Unique URL for testing changes
- Comments added to GitHub PR with preview link

### Build Hooks

Trigger rebuilds programmatically:
1. Go to Site Configuration → Build hooks
2. Create a new build hook
3. Use the webhook URL to trigger builds

### Forms (Alternative to ConvertKit)

Netlify offers built-in form handling:
```html
<form name="newsletter" method="POST" data-netlify="true">
  <input type="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>
```

### Analytics

Enable Netlify Analytics (paid feature):
1. Go to Analytics tab
2. Enable Analytics ($9/month per site)
3. No code changes needed

## Post-Deployment

### 1. Verify Deployment

- [ ] Site loads correctly
- [ ] Blog posts render properly
- [ ] Images load from correct domains
- [ ] Newsletter subscription works
- [ ] Social links are correct
- [ ] SEO metadata appears correctly

### 2. Set Up Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics
- Error tracking (Sentry)
- Uptime monitoring

### 3. Performance Optimization

- Enable caching headers
- Set up CDN if self-hosted
- Optimize images
- Monitor Core Web Vitals

## Environment-Specific Notes

### Production Build

The production build automatically:
- Optimizes bundle size
- Generates static pages where possible
- Includes security headers
- Minifies CSS and JavaScript

### ConvertKit Integration

The newsletter subscription will only work in production when:
1. Valid API credentials are provided
2. ConvertKit form is properly configured
3. Domain is whitelisted in ConvertKit settings

## Troubleshooting

### Common Issues

1. **500 errors on deployment**
   - Check environment variables are set
   - Verify build logs for errors

2. **Newsletter not working**
   - Verify ConvertKit credentials
   - Check browser console for API errors

3. **Images not loading**
   - Update `next.config.mjs` with image domains
   - Check image URLs are absolute

4. **SEO metadata not showing**
   - Verify `NEXT_PUBLIC_SITE_URL` is set
   - Test with social media debuggers

## Security Considerations

- Never commit `.env.local` file
- Rotate API keys regularly
- Monitor for security updates
- Keep dependencies updated
- Review security headers in `next.config.mjs`
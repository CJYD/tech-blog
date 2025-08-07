# Deployment Checklist for Netlify

Follow these steps to deploy your tech blog to Netlify.

## 📋 Pre-Deployment

- [ ] **Update environment variables template**
  - Copy `.env.local.example` to `.env.local`
  - Fill in your local development values

- [ ] **Update README.md**
  - Replace `yourusername` with your GitHub username
  - Update the Netlify badge once deployed

- [ ] **Review content**
  - Check all blog posts in `content/posts/`
  - Update author information in posts
  - Remove any test content

## 🚀 GitHub Setup

- [ ] **Create GitHub repository**
  ```bash
  # Go to github.com and create a new repository named 'tech-blog'
  ```

- [ ] **Initialize and push code**
  ```bash
  git init
  git add .
  git commit -m "Initial commit - Tech Blog ready for deployment"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/tech-blog.git
  git push -u origin main
  ```

## 🔧 Netlify Deployment

- [ ] **Sign up/Login to Netlify**
  - Go to [app.netlify.com](https://app.netlify.com)
  - Sign up with GitHub for easier integration

- [ ] **Connect repository**
  - Click "Add new site" → "Import an existing project"
  - Choose GitHub
  - Select your `tech-blog` repository

- [ ] **Verify build settings** (should auto-detect)
  - Build command: `npm run build`
  - Publish directory: `.next`
  - Leave other fields as default

- [ ] **Add environment variables**
  - Go to Site Configuration → Environment Variables
  - Add these variables:
    ```
    NEXT_PUBLIC_SITE_URL=https://YOUR-SITE.netlify.app
    NEXT_PUBLIC_SITE_NAME="Your Blog Name"
    NEXT_PUBLIC_AUTHOR_NAME="Your Name"
    NEXT_PUBLIC_AUTHOR_EMAIL=your.email@example.com
    NEXT_PUBLIC_AUTHOR_GITHUB=https://github.com/yourusername
    NEXT_PUBLIC_AUTHOR_TWITTER=@yourhandle
    NEXT_PUBLIC_AUTHOR_LINKEDIN=https://linkedin.com/in/yourprofile
    ```

- [ ] **Add ConvertKit credentials** (if using newsletter)
  ```
  CONVERTKIT_API_KEY=your_api_key_here
  CONVERTKIT_FORM_ID=your_form_id_here
  ```

- [ ] **Deploy the site**
  - Click "Deploy site"
  - Wait for build to complete (2-3 minutes)

## ✅ Post-Deployment

- [ ] **Verify deployment**
  - Visit your Netlify URL
  - Check all pages load correctly
  - Test blog post navigation
  - Verify images load

- [ ] **Update site URL**
  - Once you have your Netlify URL, update `NEXT_PUBLIC_SITE_URL` in environment variables
  - Trigger a redeploy

- [ ] **Custom domain** (optional)
  - Go to Domain Management
  - Add your custom domain
  - Update DNS settings

- [ ] **Enable HTTPS**
  - Automatic with Netlify
  - Verify certificate is active

- [ ] **Update README**
  - Update Netlify badge with your site's badge
  - Update demo link to your live site

## 🎉 Launch

- [ ] **Share your blog!**
  - Post on social media
  - Share with friends
  - Start writing content

## 📝 Notes

- Netlify automatically deploys when you push to GitHub
- Each pull request gets a preview URL
- Build logs available in Netlify dashboard
- Free tier includes 100GB bandwidth/month

## 🆘 Troubleshooting

If deployment fails:
1. Check build logs in Netlify dashboard
2. Verify all environment variables are set
3. Ensure Node version is 18+
4. Check `netlify.toml` configuration

## 📚 Resources

- [Netlify Docs](https://docs.netlify.com)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)

---

Good luck with your deployment! 🚀
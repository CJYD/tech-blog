# Adding New Blog Posts

## Quick Start (Super Simple!)

To add a new blog post, you only need 4 required fields:

1. **Copy the minimal template**:
   ```bash
   cp minimal-template.mdx my-new-post.mdx
   ```

2. **Edit just these 4 fields**:
   ```yaml
   ---
   title: "Your Title"
   date: "2024-01-20"
   excerpt: "2-3 sentence description"
   tags: ["Topic1", "Topic2"]
   ---
   ```

3. **Write your content** in Markdown

4. **Optional**: Add a cover image
   - Name it the same as your MDX file: `my-new-post.jpg`
   - Put it in `/public/images/blog/`
   - It's automatically detected!

5. **That's it!** Your blog automatically:
   - Appears on the home page (if recent)
   - Shows in the blog listing
   - Gets its own page at `/blog/my-new-post`
   - Has author bio included
   - Gets a unique gradient if no image
   - Calculates read time

## Frontmatter Fields (Minimal!)

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Main title of your blog post | `"Building with Next.js 14"` |
| `date` | ✅ | Publication date (YYYY-MM-DD) | `"2024-01-20"` |
| `excerpt` | ✅ | Brief description for listings | `"Learn how to..."` |
| `tags` | ✅ | Array of topic tags | `["React", "Tutorial"]` |
| `subtitle` | ❌ | Optional subtitle | `"A comprehensive guide"` |
| `readTime` | ❌ | Estimated read time (auto-calculated if not provided) | `"5 min read"` |

### Auto-Generated Fields
These are handled automatically - no need to specify:
- **Author**: Always "Christian Duque"
- **Cover Image**: Auto-detected from `/public/images/blog/[slug].jpg`
- **Background Gradient**: Auto-assigned based on post

## Available Gradient Colors

If you don't specify a `bgGradient`, one will be automatically assigned. You can use:

- `from-purple-500 via-pink-400 to-orange-300`
- `from-blue-500 via-teal-400 to-green-300`
- `from-cyan-400 via-teal-400 to-green-300`
- `from-indigo-500 via-purple-400 to-pink-300`
- `from-yellow-400 via-orange-400 to-red-400`
- `from-green-400 via-teal-400 to-blue-400`

## Adding Images

### Cover Images (Automated!)

The system automatically finds cover images for your blog posts:

1. **Automatic Detection**: Name your image file the same as your MDX file
   - MDX file: `my-awesome-post.mdx`
   - Image file: `my-awesome-post.jpg` (or .png, .webp, .gif)
   - Place in: `/public/images/blog/`
   - The system will automatically use it as the cover image!

2. **Manual Override**: Specify a different image in frontmatter
   ```yaml
   coverImage: "/images/blog/different-image.jpg"
   ```

3. **No Image**: If no image is found or specified, a gradient background with the blog number will be shown

### Images in Content

Reference images in your MDX content:
```markdown
![Alt text](/images/blog/your-image.jpg)
```

### Supported Image Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp` (recommended for best performance)
- `.gif`

## MDX Features

You can use all standard Markdown features plus:

### Code Blocks with Syntax Highlighting
````markdown
```javascript
function hello() {
  console.log("Hello World!");
}
```
````

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Custom Components
You can import and use React components in your MDX files.

## Automatic Features

When you add a new blog post:

1. **Automatic Ordering**: Posts are sorted by date (newest first)
2. **Blog Numbers**: Posts are numbered automatically (oldest = Blog 01)
3. **Related Posts**: System finds related posts by matching tags
4. **Home Page**: The 5 most recent posts appear on the home page
5. **URL Generation**: The filename becomes the URL slug

## Tips

- Keep excerpts concise (2-3 sentences)
- Use descriptive tags for better related post matching
- Optimize images before uploading (use WebP or optimized JPG/PNG)
- Test your post locally with `npm run dev` before deploying
- Use meaningful slugs (filenames) for better SEO

## Example Workflow

1. Create new file: `content/posts/understanding-react-hooks.mdx`
2. Add frontmatter with title, date, excerpt, and tags
3. Write your content
4. Add images to `/public/images/blog/` if needed
5. Save and check at `http://localhost:3000/blog/understanding-react-hooks`
6. Commit and deploy!
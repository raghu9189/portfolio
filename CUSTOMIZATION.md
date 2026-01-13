# Customization Guide

## 🎨 Color Scheme

The portfolio uses a cyan and purple color scheme. To customize:

### Option 1: Update Tailwind CSS Variables
Edit `src/index.css`:
```css
@theme {
  --color-primary: #0ea5e9;      /* Change this to your primary color */
  --color-secondary: #8b5cf6;    /* Change this to your secondary color */
  --color-accent: #06b6d4;       /* Change this to your accent color */
}
```

### Option 2: Direct Class Replacement
Replace color classes throughout the components:
- `text-cyan-400` → `text-[your-color]`
- `bg-cyan-500` → `bg-[your-color]`
- `border-cyan-500` → `border-[your-color]`

## 📝 Content Updates

### Personal Information
Update in `src/components/Hero.jsx`:
- Name
- Title
- Bio
- Social links

### About Section
Update in `src/components/About.jsx`:
- Company name
- Job description
- Highlights

### Skills
Update in `src/components/Skills.jsx`:
- Add/remove skills
- Update skill categories
- Change icons (from `react-icons`)

### Experience
Update in `src/components/Experience.jsx`:
- Add more job positions
- Update descriptions
- Modify technologies

### Projects
Update in `src/components/Projects.jsx`:
- Add your projects
- Update descriptions
- Change GitHub links
- Add live demo links

### Contact Info
Update in `src/components/Contact.jsx`:
- Email address
- Location
- Social media links

## 🖼️ Images & Assets

### Add Profile Picture
1. Add your image to `/public/` folder
2. Update `Hero.jsx`:
```jsx
<img 
  src="/your-image.jpg" 
  alt="Your Name"
  className="rounded-full w-64 h-64 object-cover"
/>
```

### Add Favicon
1. Replace `/public/vite.svg` with your favicon
2. Update `index.html`:
```html
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
```

## 🎭 Animations

### Adjust Animation Speed
In any component using Framer Motion, change the `duration`:
```jsx
transition={{ duration: 0.8 }} // Make it 0.5 for faster, 1.2 for slower
```

### Add New Animations
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 🔧 Features to Add

### Blog Section
Create `src/components/Blog.jsx`:
```jsx
const Blog = () => {
  const posts = [
    { title: "Post 1", date: "2026-01-01", excerpt: "..." },
    // Add more posts
  ]
  // Add blog component code
}
```

### Dark/Light Mode Toggle
1. Install theme package:
```bash
npm install next-themes
```

2. Add toggle button in Navbar

### Resume Download
Add to Hero or Contact section:
```jsx
<a 
  href="/resume.pdf" 
  download
  className="px-8 py-3 bg-cyan-500 rounded-lg"
>
  Download Resume
</a>
```

### Project Filters
Add filtering in Projects component:
```jsx
const [filter, setFilter] = useState('all')
const filteredProjects = projects.filter(p => 
  filter === 'all' || p.category === filter
)
```

### Testimonials Section
Create `src/components/Testimonials.jsx` to showcase reviews.

### Stats/Achievements
Add a stats section:
```jsx
const stats = [
  { label: "Projects", value: "50+" },
  { label: "Clients", value: "30+" },
  { label: "Awards", value: "15+" },
]
```

## 📱 Responsive Design

All components are responsive by default using Tailwind's breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:
```jsx
className="text-sm md:text-lg lg:text-xl"
```

## 🔍 SEO Improvements

### Add Meta Tags
Update `index.html`:
```html
<head>
  <!-- Essential Meta Tags -->
  <meta name="description" content="Raghu Ballu - Senior Software Engineer" />
  <meta name="keywords" content="React, Node.js, Full Stack Developer" />
  <meta name="author" content="Raghu Ballu" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Raghu Ballu - Portfolio" />
  <meta property="og:description" content="Senior Software Engineer" />
  <meta property="og:image" content="https://yoursite.com/preview.jpg" />
  <meta property="og:url" content="https://yoursite.com" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Raghu Ballu - Portfolio" />
  <meta name="twitter:description" content="Senior Software Engineer" />
  <meta name="twitter:image" content="https://yoursite.com/preview.jpg" />
</head>
```

### Add Sitemap
Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com</loc>
    <lastmod>2026-01-13</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

## 🎯 Performance Tips

1. **Lazy Load Images**: Use React Lazy Loading for images
2. **Code Splitting**: Already implemented with React.lazy()
3. **Optimize Bundle**: Run `npm run build` and check bundle size
4. **Use CDN**: Host images on services like Cloudinary
5. **Enable Compression**: Configure on your hosting platform

## 🐛 Common Issues

### Icons Not Showing
Make sure `react-icons` is installed:
```bash
npm install react-icons
```

### Animations Not Working
Verify `framer-motion` is installed:
```bash
npm install framer-motion
```

### Tailwind Classes Not Working
1. Check `vite.config.js` has Tailwind plugin
2. Verify `@import "tailwindcss"` in `index.css`
3. Restart dev server

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

Happy Coding! 🚀

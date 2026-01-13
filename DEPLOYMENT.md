# Deployment Guide

## Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project and deploy.

## Deploy to Netlify

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Deploy to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`** - Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Add base path in `vite.config.js`**:
   ```javascript
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react(), tailwindcss()],
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## Build for Production

To create a production build locally:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Environment Variables

If you need to add environment variables:

1. Create a `.env` file in the root directory
2. Add your variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://api.example.com
   ```
3. Access them in your code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## Custom Domain

### Vercel
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain and follow the DNS configuration steps

### Netlify
1. Go to your site settings on Netlify
2. Navigate to "Domain management"
3. Add your custom domain and configure DNS

## Performance Optimization

The portfolio is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized images
- ✅ Minified CSS and JS
- ✅ Tree shaking

## Analytics (Optional)

To add Google Analytics:

1. Install the package:
   ```bash
   npm install react-ga4
   ```

2. Initialize in your `main.jsx`:
   ```javascript
   import ReactGA from 'react-ga4';
   ReactGA.initialize('YOUR-GA-MEASUREMENT-ID');
   ```

## SEO Optimization

Update the `index.html` file with:
- Meta description
- Open Graph tags
- Twitter Card tags
- Favicon

Example:
```html
<meta name="description" content="Your description here" />
<meta property="og:title" content="Raghu Ballu - Portfolio" />
<meta property="og:description" content="Your description here" />
<meta property="og:image" content="https://yoursite.com/preview.jpg" />
```

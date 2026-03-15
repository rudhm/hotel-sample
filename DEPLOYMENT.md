# Deployment Guide

This guide covers deploying the Hotel Demo website to various platforms.

## Prerequisites

- Node.js 16+ installed
- npm installed
- A GitHub account (for GitHub Pages) or other hosting account

---

## GitHub Pages Deployment (Recommended)

GitHub Pages is the easiest and fastest way to deploy this static site for free.

### Step 1: Prepare Your Repository

```bash
cd hotel-sample
git add .
git commit -m "Ready for GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
4. Click **Save**

### Step 3: Build and Deploy

```bash
cd frontend
npm run build
```

The `dist/` folder will be created with the production build. Push it to your repository:

```bash
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

GitHub Pages will automatically deploy the contents of the `dist/` folder.

### Step 4: Verify Deployment

Your site will be available at:
```
https://yourusername.github.io/hotel-sample/
```

Wait a few minutes for GitHub to process the deployment. You can check the progress in the **Actions** tab on GitHub.

---

## Vercel Deployment (Alternative)

Vercel is perfect for Next.js and React projects with automatic deployments.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
cd frontend
vercel
```

Follow the prompts to:
- Link to your GitHub account
- Select your project
- Configure build settings (Vite will auto-detect)

### Step 3: Verify Deployment

Your site will be live at a Vercel URL instantly. Connect your custom domain if you have one.

**Benefits**:
- Automatic deployments on git push
- Instant preview deployments for pull requests
- Built-in analytics and performance monitoring

---

## Netlify Deployment (Alternative)

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Build and Deploy

```bash
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

### Step 3: Verify Deployment

Your site will be live at a Netlify URL. Connect your custom domain in Netlify dashboard.

**Benefits**:
- Easy drag-and-drop deployment
- Great performance and CDN
- Free SSL certificate included

---

## Manual Static Hosting

For any static hosting (S3, Azure, Firebase, etc.):

### Step 1: Build the Project

```bash
cd frontend
npm run build
```

### Step 2: Upload the dist/ Folder

Upload all contents of the `dist/` folder to your hosting provider.

### Step 3: Configure SPA Routing

Since this is a React Router SPA, configure your hosting to:
- Serve `index.html` for all routes
- Use `dist/` as the public directory

**Common configurations**:

**AWS S3**: Enable "Static website hosting" and set index document to `index.html`

**Firebase Hosting**: 
```bash
firebase init hosting
# Deploy
firebase deploy --only hosting
```

**Apache (.htaccess)**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx**:
```nginx
server {
    listen 80;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Environment Variables

This project doesn't require environment variables since it uses mock data. However, if you need to add a backend API in the future:

1. Create `.env.local` in `frontend/` directory
2. Add variables: `VITE_API_URL=https://api.example.com`
3. Access in code: `import.meta.env.VITE_API_URL`

---

## Troubleshooting

### 404 Errors on GitHub Pages

**Problem**: Routes like `/rooms` show 404 errors

**Solution**: This is normal for GitHub Pages with React Router. The site works correctly - routing happens on the client side.

### Blank Page on Deployment

**Problem**: Site shows blank page after deployment

**Solution**: Check browser console for errors. Ensure:
1. `base` path in `vite.config.js` matches your repository name
2. `index.html` is at the root of `dist/`
3. All assets are loading correctly

### Slow Performance

**Problem**: Site loads slowly on deployment

**Solution**:
1. Check bundle size: `npm run build` shows sizes
2. Optimize images: Unsplash URLs already have size parameters
3. Enable compression: Most hosts do this automatically
4. Use a CDN: Vercel and Netlify provide built-in CDNs

---

## Performance Optimization

### Already Optimized
- ✅ Lazy loading on images
- ✅ Minified CSS and JavaScript
- ✅ Optimized Unsplash image URLs (w=1600&q=85)
- ✅ Efficient Framer Motion animations
- ✅ Code splitting ready

### Future Improvements
- [ ] Image optimization library (e.g., sharp)
- [ ] Service worker for offline support
- [ ] Compression (gzip already enabled)
- [ ] HTTP/2 push (handled by hosting provider)

---

## Monitoring & Analytics

### GitHub Pages
- Check deployments in the **Actions** tab
- View deployment logs and history

### Vercel
- Real-time analytics dashboard
- Performance monitoring
- Error tracking

### Netlify
- Built-in analytics
- Form submissions tracking
- Performance metrics

---

## Rolling Back a Deployment

### GitHub Pages
```bash
# Revert to previous commit
git revert <commit-hash>
git push origin main
```

### Vercel
- Use the Vercel dashboard to roll back to any previous deployment

### Netlify
- Use the Netlify dashboard to deploy any previous build

---

## Custom Domain Setup

### GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Add your custom domain under "Custom domain"
3. Update DNS records at your domain registrar to point to GitHub Pages

### Vercel
1. Go to project **Settings** → **Domains**
2. Add custom domain
3. Update DNS records (Vercel will provide instructions)

### Netlify
1. Go to **Site settings** → **Domain management**
2. Add custom domain
3. Update DNS records

---

## Security

### Already Secure
- ✅ No sensitive data exposed
- ✅ No backend API calls (mock data only)
- ✅ HTTPS enabled on all platforms
- ✅ No third-party scripts

### Best Practices
- Keep dependencies updated: `npm update`
- Use HTTPS for any custom domains
- Enable GitHub branch protection
- Review pull requests before merging

---

## Support

If you encounter deployment issues:

1. Check the platform's documentation
2. Review browser console for errors
3. Check network tab for failed requests
4. Verify all files are in `dist/` folder
5. Ensure `index.html` is at root of `dist/`

For platform-specific help:
- **GitHub Pages**: https://docs.github.com/en/pages
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com

---

**Last Updated**: March 2024

**Ready to deploy? Choose your platform and follow the steps above!** 🚀

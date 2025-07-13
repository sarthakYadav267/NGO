# Deployment Guide - Kalki Paltan Foundation

## 🚀 Vercel Deployment (Recommended)

### Method 1: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# From project root, deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration (Automated)
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Other
     - **Root Directory**: `./`
     - **Build Command**: `npm run build`
     - **Output Directory**: `./`
     - **Install Command**: `npm install`

3. **Auto-Deploy**: Vercel will automatically deploy on every push to main branch

### Method 3: Manual Upload
1. Visit [vercel.com](https://vercel.com)
2. Drag and drop your project folder
3. Vercel will deploy instantly

## 📋 Pre-Deployment Checklist

- [ ] All image paths updated to `src/assets/images/`
- [ ] CSS and JS paths updated in `index.html`
- [ ] `vercel.json` configuration file present
- [ ] `package.json` with proper scripts
- [ ] `.vercelignore` to exclude unnecessary files
- [ ] Test locally with `npm run dev`

## 🔧 Build Configuration

### vercel.json Features:
- **Static Site Configuration**: Optimized for HTML/CSS/JS
- **Security Headers**: XSS protection, content type options
- **Cache Control**: Long-term caching for assets
- **SPA Routing**: All routes redirect to index.html

### package.json Scripts:
- `npm run dev` - Local development server
- `npm run build` - Production build with minification
- `npm run deploy` - Deploy to Vercel production
- `npm run preview` - Deploy to Vercel preview

## 🌐 Domain Configuration

### Custom Domain (Optional):
1. In Vercel dashboard, go to Project Settings
2. Navigate to "Domains" tab
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate is automatically provisioned

### Subdomains:
- Production: `https://your-project.vercel.app`
- Preview: `https://your-project-git-branch.vercel.app`

## 📊 Performance Optimization

### Automatic Optimizations:
- **Image Optimization**: Vercel automatically optimizes images
- **Compression**: Gzip/Brotli compression enabled
- **CDN**: Global edge network distribution
- **Cache Headers**: Optimized caching strategy

### Manual Optimizations:
```bash
# Minify CSS and JS
npm run build

# This will create minified versions:
# - src/styles/style.min.css
# - src/scripts/script.min.js
```

## 🔍 Monitoring & Analytics

### Vercel Analytics (Built-in):
- Real User Metrics (RUM)
- Core Web Vitals
- Page views and performance

### Enable Analytics:
1. Go to Project Settings in Vercel
2. Navigate to "Analytics" tab
3. Enable Web Analytics
4. Add analytics script to `index.html` if needed

## 🐛 Troubleshooting

### Common Issues:

1. **Images not loading**:
   - Check file paths start with `src/assets/images/`
   - Verify case sensitivity in filenames
   
2. **CSS/JS not loading**:
   - Ensure paths in `index.html` are correct
   - Check `vercel.json` routing configuration

3. **Build fails**:
   - Run `npm install` to install dependencies
   - Check for any syntax errors in files

4. **404 errors**:
   - Verify `vercel.json` has proper routing rules
   - Check all file paths are relative

### Debug Commands:
```bash
# Check Vercel status
vercel --version

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Inspect project
vercel inspect
```

## 🔄 Continuous Deployment

### GitHub Actions (Optional):
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📈 Post-Deployment

### Testing:
1. **Functionality**: Test all links and forms
2. **Performance**: Check load times
3. **Mobile**: Test responsive design
4. **SEO**: Verify meta tags and structure

### Updates:
```bash
# Update content
git add .
git commit -m "Update content"
git push origin main
# Vercel auto-deploys
```

### Rollback (if needed):
1. Go to Vercel dashboard
2. Select previous deployment
3. Click "Promote to Production"

---

🎉 **Your NGO website is now live and accessible worldwide!**
# 🚀 Deployment Guide - Portfolio 2025

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# Navigate to project
cd c:\Users\hp\.gemini\antigravity\scratch\portfolio-2025

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Portfolio 2025 - Interactive 3D Backgrounds"

# Create repository on GitHub: https://github.com/new
# Name it: portfolio-2025

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-2025.git

# Push
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: Vercel Website (Easiest)**
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `portfolio-2025` repository
5. Click "Deploy" (Vercel auto-detects Vite)
6. Done! 🎉

**Option B: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

## Environment Setup

No environment variables needed! Everything is configured.

## Build Command

Vercel will automatically use:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add your custom domain

## Troubleshooting

**Issue**: Build fails
- **Solution**: Run `npm run build` locally first to check for errors

**Issue**: 3D scenes not loading
- **Solution**: Check browser console, may need to enable WebGL

**Issue**: Music not playing
- **Solution**: User must click "ENTER EXPERIENCE" first (browser autoplay policy)

## Your Live URL

After deployment, you'll get: `https://portfolio-2025-xxx.vercel.app`

---

Need help? Contact Vercel support or check: https://vercel.com/docs

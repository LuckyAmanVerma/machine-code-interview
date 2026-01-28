# Deployment Guide

This document explains how to deploy the Machine Code Interview application to GitHub Pages.

## Prerequisites

- Git installed on your machine
- GitHub account
- Project already configured for GitHub Pages (see below)

## Configuration Changes (Already Done)

The following changes have been made to support GitHub Pages deployment:

1. **vite.config.ts** - Base path set to `/machine-code-interview/`
2. **src/App.tsx** - Using `HashRouter` instead of `BrowserRouter`
3. **package.json** - Deploy scripts added with dev/prod modes

## Build Commands

```bash
# Development build (faster, with source maps for debugging)
npm run build:dev

# Production build (optimized, minified - recommended for deployment)
npm run build:prod

# Deploy to GitHub Pages (uses production build automatically)
npm run deploy
```

- **build:dev** - Creates a development build in `dist/` folder with source maps. Useful for testing the build locally with full debugging capabilities.
- **build:prod** - Creates an optimized production build with minification and optimization. Use this before deploying.
- **deploy** - Builds with production settings and automatically pushes to GitHub Pages.

## Deployment Steps

### Step 1: Initialize Git Repository

```bash
cd machine-code-interview
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create Repository on GitHub

1. Go to [github.com](https://github.com)
2. Click "New" to create a new repository
3. Name it: `machine-code-interview`
4. Keep it public (for GitHub Pages to work)
5. Click "Create repository"

### Step 3: Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/machine-code-interview.git
git branch -M main
git push -u origin main
```

If prompted for password, use your GitHub Personal Access Token instead.

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
- Runs `npm run build` to create optimized production build
- Uses `gh-pages` package to push `dist/` folder to `gh-pages` branch
- Automatically sets up GitHub Pages

### Step 5: Verify Deployment

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Confirm source is `gh-pages` branch
4. You should see: "Your site is live at: https://YOUR_USERNAME.github.io/machine-code-interview/"

**Wait 1-2 minutes** for GitHub to build and deploy.

## Access Your Live App

Visit: `https://YOUR_USERNAME.github.io/machine-code-interview/`

You should see:
- Title: "Machine Code Interview"
- Home page with welcome text
- 404 page when navigating to invalid routes

## Troubleshooting

### Blank Page or 404 Error
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console (F12) for JavaScript errors
- Verify `vite.config.ts` has `base: '/machine-code-interview/'`
- Ensure `App.tsx` uses `HashRouter`

### Push Authentication Issues
- Use Personal Access Token instead of password
- [Create a PAT](https://github.com/settings/tokens) with `repo` scope

### Pages Not Building
- Check GitHub Actions tab in repository
- Look for deployment workflow errors
- Ensure `gh-pages` branch exists and is protected

## Future Updates

To update your deployed app:

```bash
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

Your changes will be live in 1-2 minutes.

## Removing Deployment

To stop hosting on GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Change source to "None"
3. Delete `gh-pages` branch

Optionally delete locally:
```bash
npm run build
git push origin --delete gh-pages
```

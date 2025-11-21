# Deployment Guide

Your portfolio is built with **React** and **Vite**, which makes it extremely easy to deploy for free on modern hosting platforms.

## Option 1: Vercel (Recommended)
Vercel is the creators of Next.js and provides the best performance for React apps.

1.  **Create a GitHub Repository**:
    *   Go to [GitHub.com](https://github.com) and create a new repository (e.g., `my-portfolio`).
    *   Push your code to this repository.
2.  **Sign up for Vercel**:
    *   Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
3.  **Import Project**:
    *   Click "Add New..." -> "Project".
    *   Select your `my-portfolio` repository.
4.  **Deploy**:
    *   Vercel will automatically detect that it's a Vite project.
    *   Click "Deploy".
    *   In about a minute, your site will be live!

## Option 2: Netlify
Netlify is another excellent option for static sites.

1.  **Sign up for Netlify**:
    *   Go to [netlify.com](https://netlify.com).
2.  **Drag and Drop**:
    *   Run `npm run build` in your terminal.
    *   This creates a `dist` folder in your project.
    *   Drag and drop this `dist` folder onto the Netlify dashboard.
3.  **Git Deployment (Better)**:
    *   Connect your GitHub repository to Netlify similar to Vercel for automatic updates when you push code.

## Important Note on Routing
If you add multiple pages later (using React Router), you might need to add a `_redirects` file for Netlify or a `vercel.json` for Vercel to handle page refreshes. For this single-page portfolio, **no extra configuration is needed**.

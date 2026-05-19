Deployment guide

This project is a Vite + React app. Below are quick deployment options and notes.

1) Vercel (recommended for simplicity)
- Create a Vercel project, link your GitHub repo.
- Build command: `npm run build`
- Output directory: `dist`
- Add environment variables (if using Supabase or other services) in Vercel dashboard.

2) Netlify
- Connect your GitHub repo in Netlify.
- Build command: `npm run build`
- Publish directory: `dist`
- Optional: Netlify will auto-detect Node; `netlify.toml` included with recommended settings.

3) GitHub Pages
- Workflow provided at `.github/workflows/deploy-gh-pages.yml` which builds and publishes `dist` to GitHub Pages for the `main` branch.
- Ensure your repository's GitHub Pages settings point to `gh-pages` branch or the action's deployment branch.

Sitemap & robots
- `public/sitemap.xml` is included and will be copied to the site root by Vite.
- `public/robots.txt` is included.
- Update `sitemap.xml` URLs to match your production domain.

SEO & analytics
- Add Open Graph meta tags in `index.html` and update `sitemap.xml`.
- Add analytics snippet in `index.html` or via a tag manager. Remember GDPR/consent requirements.

Notes on server features
- If you use Supabase, Google API sync, or any server-side secrets, store keys in your host's environment variables (Vercel/Netlify/GitHub Actions secrets) and do not commit them.

Quick local build
```bash
npm ci
npm run build
# Serve dist locally
npx serve dist
```

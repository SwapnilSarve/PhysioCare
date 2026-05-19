# Physio Portfolio Website

## Install
npm install

## Run
npm run dev

## Build
npm run build

## CI/CD and Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-gh-pages.yml`.

- It builds the app with `npm run build`.
- It publishes the generated `dist/` folder to the `gh-pages` branch.
- It runs automatically on pushes to `main` or `master` and can also be triggered manually via the Actions tab.

To complete deployment:
1. Push this repo to GitHub.
2. In the repository settings, enable GitHub Pages and select the `gh-pages` branch.
3. Optionally use Netlify or Vercel instead of GitHub Pages; a `netlify.toml` file is included.

# Japji Sahib Memorisation App

React + TypeScript + Vite app for practicing and memorising Japji Sahib.

## Local development

```bash
npm install
npm run dev
```

## Build and test

```bash
npm run build
npm run test:run
```

## Auto-deploy on every push (GitHub Pages)

This repo is configured with a GitHub Actions workflow at `.github/workflows/deploy.yml`.
Every push to `main` will:

1. Install dependencies
2. Build the app
3. Deploy `dist/` to GitHub Pages

### One-time GitHub setup

In your GitHub repository:

1. Open **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

After that, each push to `main` deploys automatically.

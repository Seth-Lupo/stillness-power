# Stillness Power® Website

A modern, responsive website for Stillness Power® yoga and wellness services, built with SvelteKit and optimized for static deployment.

## Deployment Configuration

This website supports flexible deployment to different hosting environments:

### Quick Deployment Commands

```sh
# For GitHub Pages (seth-lupo.github.io/stillness-power)
npm run build:github

# For Custom Domain (stillnesspower.com)
npm run build:custom
```

### Environment Variables

Create a `.env.local` file (copy from `.env.example`) to customize deployment:

```sh
# Option 1: Use DEPLOY_TARGET (recommended)
DEPLOY_TARGET=custom-domain    # For stillnesspower.com
DEPLOY_TARGET=github-pages     # For GitHub Pages

# Option 2: Use PUBLIC_BASE_PATH (overrides DEPLOY_TARGET)
PUBLIC_BASE_PATH=""            # For custom domain
PUBLIC_BASE_PATH="/stillness-power"  # For current GitHub Pages
PUBLIC_BASE_PATH="/new-repo"   # For different repo name
```

### Supported Deployment Scenarios

1. **GitHub Pages (subdirectory)**: `https://seth-lupo.github.io/stillness-power/`
   - Use: `npm run build:github`
   - Or set: `DEPLOY_TARGET=github-pages`

2. **Custom Domain**: `https://stillnesspower.com`
   - Use: `npm run build:custom`
   - Or set: `DEPLOY_TARGET=custom-domain`

3. **Different GitHub Repo**: `https://seth-lupo.github.io/new-repo-name/`
   - Set: `PUBLIC_BASE_PATH="/new-repo-name"`

## Development

Start a development server:

```sh
npm install
npm run dev

# or start and open in browser
npm run dev -- --open
```

## Building

```sh
# Default build (uses current environment settings)
npm run build

# Build for specific deployment target
npm run build:github   # GitHub Pages
npm run build:custom   # Custom domain

# Preview the build
npm run preview
```

## Project Structure

- **Static Routes**: All blog posts use static routes for optimal GitHub Pages compatibility
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Static Generation**: Full static site generation with SvelteKit adapter-static

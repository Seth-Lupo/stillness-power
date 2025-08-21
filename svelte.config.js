import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Configure the base path for different deployment scenarios
const getBasePath = () => {
	// Check for custom base path environment variable first
	if (process.env.PUBLIC_BASE_PATH !== undefined) {
		return process.env.PUBLIC_BASE_PATH;
	}
	
	// Default behavior: use repo name for GitHub Pages, empty for custom domain
	if (process.env.NODE_ENV === 'production') {
		// Set to empty string '' for custom domain (stillnesspower.com)
		// Set to '/stillness-power' for GitHub Pages (seth-lupo.github.io/stillness-power)
		return process.env.DEPLOY_TARGET === 'custom-domain' ? '' : '/stillness-power';
	}
	
	// Development mode
	return '';
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { 
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: getBasePath()
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore image assets during prerender
				if (path.startsWith('/images/')) {
					return;
				}
				
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}
				
				// Log other errors but don't fail the build
				console.warn(`Prerender warning: ${message}`);
				return;
			},
			handleUnseenRoutes: 'warn'
		}
	}
};

export default config;

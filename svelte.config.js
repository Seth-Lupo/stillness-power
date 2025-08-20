import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
			base: process.env.NODE_ENV === 'production' ? '/stillness-power' : ''
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

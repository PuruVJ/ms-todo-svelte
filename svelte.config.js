import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),

    prerender: {
      crawl: true,
      enabled: true,
      entries: ['*', '/my-day']
    },

    vite: {
      resolve: {
        alias: {
          $: new URL('./src/', import.meta.url).pathname,
          $stores: new URL('./src/stores/', import.meta.url).pathname,
          $data: new URL('./src/data/', import.meta.url).pathname,
          $components: new URL('./src/components/', import.meta.url).pathname,
          $actions: new URL('./src/actions/', import.meta.url).pathname
        }
      }
    }
  }
};

export default config;

import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: staticAdapter(),

    prerender: {
      crawl: true,
      enabled: true,
      entries: ['*', '/my-day']
    }
  }
};

export default config;

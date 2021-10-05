import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import unpluginIcons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: staticAdapter(),

    prerender: {
      crawl: true,
      enabled: true
    },

    vite: {
      plugins: [unpluginIcons({ compiler: 'svelte', autoInstall: true })],
      resolve: {
        alias: {
          $stores: new URL('./src/stores/', import.meta.url).pathname,
          $data: new URL('./src/data/', import.meta.url).pathname,
          $components: new URL('./src/components/', import.meta.url).pathname
        }
      }
    }
  }
};

export default config;

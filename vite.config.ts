import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $: new URL('./src/', import.meta.url).pathname,
      $stores: new URL('./src/stores/', import.meta.url).pathname,
      $data: new URL('./src/data/', import.meta.url).pathname,
      $components: new URL('./src/components/', import.meta.url).pathname,
      $actions: new URL('./src/actions/', import.meta.url).pathname
    }
  }
});

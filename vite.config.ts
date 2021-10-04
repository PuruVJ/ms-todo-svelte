import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import unpluginIcons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [svelte(), unpluginIcons({ compiler: 'svelte' })],
  resolve: {
    alias: {
      $stores: new URL('./src/stores/', import.meta.url).pathname,
      $data: new URL('./src/data/', import.meta.url).pathname,
      $components: new URL('./src/components/', import.meta.url).pathname
    }
  },
  build: {
    minify: 'terser'
  }
});

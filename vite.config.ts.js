// vite.config.ts
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import unpluginIcons from "unplugin-icons/vite";
var vite_config_default = defineConfig({
  plugins: [svelte(), unpluginIcons({ compiler: "svelte" })],
  resolve: {
    alias: {
      $stores: new URL("./src/stores/", "file://P:\\ms-todo-svelte\\vite.config.ts").pathname,
      $data: new URL("./src/data/", "file://P:\\ms-todo-svelte\\vite.config.ts").pathname,
      $components: new URL("./src/components/", "file://P:\\ms-todo-svelte\\vite.config.ts").pathname
    }
  },
  build: {
    minify: "terser"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHVucGx1Z2luSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtzdmVsdGUoKSwgdW5wbHVnaW5JY29ucyh7IGNvbXBpbGVyOiAnc3ZlbHRlJyB9KV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJHN0b3JlczogbmV3IFVSTCgnLi9zcmMvc3RvcmVzLycsIFwiZmlsZTovL1A6XFxcXG1zLXRvZG8tc3ZlbHRlXFxcXHZpdGUuY29uZmlnLnRzXCIpLnBhdGhuYW1lLFxyXG4gICAgICAkZGF0YTogbmV3IFVSTCgnLi9zcmMvZGF0YS8nLCBcImZpbGU6Ly9QOlxcXFxtcy10b2RvLXN2ZWx0ZVxcXFx2aXRlLmNvbmZpZy50c1wiKS5wYXRobmFtZSxcclxuICAgICAgJGNvbXBvbmVudHM6IG5ldyBVUkwoJy4vc3JjL2NvbXBvbmVudHMvJywgXCJmaWxlOi8vUDpcXFxcbXMtdG9kby1zdmVsdGVcXFxcdml0ZS5jb25maWcudHNcIikucGF0aG5hbWVcclxuICAgIH1cclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6ICd0ZXJzZXInXHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxVQUFVLGNBQWMsRUFBRSxVQUFVO0FBQUEsRUFDOUMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUyxJQUFJLElBQUksaUJBQWlCLDZDQUE2QztBQUFBLE1BQy9FLE9BQU8sSUFBSSxJQUFJLGVBQWUsNkNBQTZDO0FBQUEsTUFDM0UsYUFBYSxJQUFJLElBQUkscUJBQXFCLDZDQUE2QztBQUFBO0FBQUE7QUFBQSxFQUczRixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K

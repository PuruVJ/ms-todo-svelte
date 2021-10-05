<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = () => {
    return { redirect: '/my-day', status: 301 };
  };
</script>

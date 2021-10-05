<script lang="ts">
  import type { List } from '$stores/lists.store';

  export let list: List;
</script>

<svelte:head>
  <title>{list.title} - Beautiful Todo</title>
</svelte:head>

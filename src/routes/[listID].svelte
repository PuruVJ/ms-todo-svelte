<script>
  import { page } from '$app/stores';
  import ListView from '$components/List/ListView.svelte';
  import SideNav from '$components/SideNav.svelte';
  import { lists } from '$stores/lists.store';

  $: list = $lists[$page.params.listID];
</script>

<div class="container">
  <SideNav />
  <main>
    {#if list !== undefined}
      <ListView {list} listID={$page.params.listID} />
    {:else}
      Can't find list
    {/if}
  </main>
</div>

<style lang="scss">
  .container {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  main {
    overflow: hidden;

    position: relative;
  }
</style>

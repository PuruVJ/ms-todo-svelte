<script>
  import SideNav from '$components/SideNav.svelte';
</script>

<div class="container">
  <SideNav />
  <main>
    <!-- Main body goes here -->
  </main>

  <div id="cover-img" aria-hidden="true" />
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

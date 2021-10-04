<script>
  import SideNav from '$components/SideNav.svelte';
  import { Route, Router } from 'svelte-routing';
  import '../css/global.scss';
  import List from './List.svelte';
</script>

<div class="container">
  <SideNav />

  <main>
    <Router url="/">
      <Route path="/:listID" component={List} />
    </Router>
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

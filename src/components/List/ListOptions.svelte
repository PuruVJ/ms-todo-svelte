<script lang="ts">
  import ThemeSelector from './ThemeSelector.svelte';

  export let listID: string;
</script>

<div class="container" tabindex="0">
  <ThemeSelector {listID} />
</div>

<style lang="scss">
  .container {
    width: 20rem;

    padding: 1rem 1rem;

    background-color: rgba(var(--app-color-light-rgb), 0.2) !important;
    backdrop-filter: blur(32px);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 5px 19px 7px;

    border-radius: 8px;
  }
</style>

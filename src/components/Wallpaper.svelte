<script lang="ts">
  import { browser } from '$app/env';
  import { themes } from '$data/themes';
  import type { List } from '$stores/lists.store';
  import { waitFor } from '../helpers/wait-for';

  export let list: List;

  $: ({ image } = themes[list.theme]);

  let opacity: 1 | 0 = 1;
  let backgroundImage: string;

  const changeBackground = async (background: string) => {
    if (!browser) return;

    // Hide everything
    opacity = 0;

    await waitFor(150);

    // Now set the background
    backgroundImage = background;

    await waitFor(200);

    // Show it up
    opacity = 1;
  };

  $: changeBackground(image);
</script>

<svelte:head>
  {#each Array.from({ length: 15 }, (_, i) => i + 1) as num}
    <link rel="prefetch" href="/wallpapers/{num}.jpg" />
  {/each}
</svelte:head>

<div aria-hidden="true" style="opacity: {opacity};background-image: {backgroundImage};" />

<style lang="scss">
  div {
    content: '';

    display: block;

    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    overflow: hidden;

    z-index: -1;

    opacity: 1;

    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;

    transition: opacity 150ms ease-in;
  }
</style>

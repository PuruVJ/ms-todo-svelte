<script lang="ts">
  import { themes } from '$data/themes';
  import { lists } from '$stores/lists.store';

  export let listID: string;
</script>

<section class="container">
  {#each Object.entries(themes) as [themeName, { image }]}
    <button style:background-image={image} on:click={() => ($lists[listID].theme = themeName)} />
  {/each}
</section>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  button {
    height: 3rem;
    width: 3rem;

    justify-self: center;

    cursor: pointer;

    margin: 5px 0;

    border-radius: 8px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>

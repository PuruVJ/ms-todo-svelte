<script lang="ts">
  import { clickOutside, focusOutside } from '$/actions';
  import { fadeIn, fadeOut } from '$/fade';
  import { lists } from '$stores/lists.store';
  import { mdiDotsVertical } from '@mdi/js';
  import Icon from '../Icon.svelte';
  import ListOptions from './ListOptions.svelte';

  export let listID: string;

  let listOptionsMenuVisible = false;

  function show() {
    listOptionsMenuVisible = true;
  }

  function hide() {
    listOptionsMenuVisible = false;
  }
</script>

<div class="container">
  <div class="heading">
    <input
      autocomplete="off"
      bind:value={$lists[listID].title}
      style="width: {$lists[listID].title.length}ch;"
    />
  </div>

  <div class="options-area" use:clickOutside={hide} use:focusOutside={hide}>
    <button on:click={show} on:focus={show}>
      <Icon path={mdiDotsVertical} size={30} />
    </button>

    {#if listOptionsMenuVisible}
      <div class="menu-parent" in:fadeIn out:fadeOut>
        <ListOptions {listID} />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
  }

  .heading {
    color: var(--app-color-dark);

    border-radius: 8px;

    padding: 0 1rem;

    display: flex;

    width: max-content;

    backdrop-filter: blur(40px);
    background-color: rgba(var(--app-color-light-rgb), 0.4);

    &:focus-within {
      box-shadow: inset 0 0 0 2.3px rgba(var(--app-color-dark-rgb), 0.9);
    }

    input {
      flex: 1 0 auto;

      background: transparent;

      border: none;

      color: var(--app-color-dark) !important;
      font-size: 2.618rem;
      font-family: 'Fira Code', monospace;
      font-weight: 600;

      min-width: 0;
      width: auto;
      height: 2.618 * 1.618rem;

      padding: 0;

      &:focus {
        box-shadow: none !important;
      }
    }
  }

  .options-area {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: relative;

    button {
      background-color: rgba(var(--app-color-light-rgb), 0.4);
      backdrop-filter: blur(40px);

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;
      border-radius: 50%;

      height: 3rem;
      width: 3rem;

      font-size: 2rem;

      cursor: pointer;
    }
  }

  .menu-parent {
    position: absolute;
    top: 4rem;
    right: 0rem;
    z-index: 1;

    margin-top: 4.5px;
  }
</style>

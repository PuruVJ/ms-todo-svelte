<script lang="ts">
  import { lists } from '$stores/lists.store';
  import { mdiDotsVertical } from '@mdi/js';
  import Icon from '../Icon.svelte';

  export let listID: string;
</script>

<div class="container">
  <div class="heading">
    <input
      autocomplete="off"
      bind:value={$lists[listID].title}
      style="width: {$lists[listID].title.length}ch;"
    />
  </div>

  <div class="options-area">
    <button>
      <Icon path={mdiDotsVertical} size={30} />
    </button>
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
</style>

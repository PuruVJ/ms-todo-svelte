<script lang="ts">
  import { randInt } from '$/helpers/rand-int';
  import { goto } from '$app/navigation';
  import { themes } from '$data/themes';
  import { List, lists } from '$stores/lists.store';
  import { mdiMenu, mdiPlus } from '@mdi/js';
  import { nanoid } from 'nanoid';
  import { tick } from 'svelte';
  import Icon from './Icon.svelte';

  let inputVisible = false;
  let listNameInput = '';

  let inputEl: HTMLInputElement;

  function createList() {
    let listID: string;

    do listID = nanoid();
    while (listID in $lists);

    const themeNames = Object.keys(themes);

    const list: List = {
      icon: mdiMenu,
      theme: themeNames[randInt(0, themeNames.length)],
      title: listNameInput,
      type: 'custom'
    };

    $lists[listID] = list;

    goto(`/${listID}`);

    listNameInput = '';
    inputVisible = false;
  }

  async function buttonOnClick() {
    inputVisible = true;
    await tick();
    inputEl.focus();
  }
</script>

<button class="new-list-button" tabindex={inputVisible ? -1 : 0} on:click={buttonOnClick}>
  {#if inputVisible}
    <input
      type="text"
      bind:this={inputEl}
      bind:value={listNameInput}
      on:blur={() => !listNameInput && (inputVisible = false)}
      on:keydown={(e) => e.key === 'Enter' && listNameInput && createList()}
      maxlength="20"
    />
  {:else}
    <span class="button-content">
      <Icon path={mdiPlus} />
      New List
    </span>
  {/if}
</button>

<style lang="scss">
  .new-list-button {
    background-color: transparent;

    $color: rgba(var(--app-color-dark-rgb), 0.85);
    color: $color;
    fill: $color;
    font-family: 'Fira Code', monospace;
    font-size: 1.3rem;

    cursor: pointer;

    width: 100%;
    height: 3rem;

    border: none;
    border-top: solid 0.5px rgba(var(--app-color-dark-rgb), 0.3);
    border-radius: 0 0 1rem 1rem;

    padding: 0;

    &:hover,
    &:focus {
      background-color: rgba(var(--app-color-dark-rgb), 0.1) !important;
    }

    .button-content {
      display: flex;
      align-items: center;
      gap: 0.7rem;

      padding: 0 1rem;
    }

    input {
      height: 100%;
      width: 100%;

      border: none;
      border-radius: 0 0 1rem 1rem;

      padding: 0 1rem;
      box-sizing: border-box;

      color: var(--app-color-dark);
      font-size: 1.3rem;
      font-family: 'Fira Code', monospace;

      background-color: rgba(var(--app-color-light-rgb), 0.15);

      &:focus {
        box-shadow: none !important;
      }
    }
  }
</style>

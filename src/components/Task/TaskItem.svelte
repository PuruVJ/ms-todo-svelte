<script lang="ts">
  import { pullFromArray } from '$/helpers/array';

  import Icon from '$components/Icon.svelte';
  import { lists } from '$stores/lists.store';
  import { tasks } from '$stores/tasks.store';
  import {
    mdiCheckboxBlankCircleOutline,
    mdiCheckboxMarkedCircle,
    mdiStar,
    mdiStarOutline
  } from '@mdi/js';
  import { endOfDay, format, isAfter } from 'date-fns';

  export let taskID: string;
  export let listID: string;

  function getBelongingList(listIDs: string[]) {
    return Object.keys($lists).find((id) => id === listIDs?.filter((id) => id !== 'my-day')[0]);
  }

  $: ({ completed, listIDs, title, dateDue } = $tasks[taskID]);

  /* Other info */
  $: showListName = !listIDs.includes('tasks') && listID !== getBelongingList(listIDs);
  $: showDate = isAfter(new Date(dateDue), endOfDay(new Date()));

  function toggleImportance() {
    const isImportant = listIDs.includes('important');

    $tasks[taskID].listIDs = isImportant
      ? pullFromArray(listIDs, 'important')
      : [...listIDs, 'important'];
  }

  function toggleCompleted() {
    $tasks[taskID].completed = !completed;
  }
</script>

<div class="container" class:completed tabindex="0">
  <button class="check-button" on:click|stopPropagation={toggleCompleted}>
    <Icon path={completed ? mdiCheckboxMarkedCircle : mdiCheckboxBlankCircleOutline} />
  </button>

  <span class="info-area">
    <span class="title">{title}</span>
    <div class="other-info">
      <!-- List name if not in `tasks` -->
      {#if showListName}
        <span>{$lists[listIDs.find((id) => !['my-day', 'important'].includes(id))].title}</span>

        {#if showDate}
          <span>&nbsp;&#8226;&nbsp;</span>
        {/if}
      {/if}

      <!-- Due date -->
      {#if showDate}
        {format(new Date(dateDue), 'd MMM, yyyy')}
      {/if}
    </div>
  </span>

  <button class="important-button" on:click|stopPropagation={toggleImportance}>
    <Icon path={listIDs.includes('important') ? mdiStar : mdiStarOutline} />
  </button>
</div>

<style lang="scss">
  .container {
    --color: var(--app-color-dark);
    background-color: rgba(var(--app-color-light-rgb), 0.4);
    backdrop-filter: blur(40px);

    color: var(--color);
    fill: var(--color);

    display: flex;
    align-items: center;

    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 2px 4px 0px;

    height: 3.3rem;
    margin: 0.7rem 0;

    &:focus {
      box-shadow: inset 0 0 0 2.3px rgba(var(--app-color-dark-rgb), 0.9);
    }

    &.completed {
      --color: rgba(var(--app-color-dark-rgb), 0.6);

      .title {
        text-decoration: line-through;
      }
    }
  }

  .info-area {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 80%;

    .other-info {
      display: inherit;

      color: rgba(var(--app-color-dark-rgb), 0.6);
      fill: rgba(var(--app-color-dark-rgb), 0.6);
      font-size: 0.7rem;
    }
  }

  button {
    background-color: transparent;

    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    width: 3rem;

    padding: 0.5rem;
    border-radius: 50%;
  }
</style>

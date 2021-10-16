<script lang="ts">
  import Icon from '$components/Icon.svelte';
  import { Task, tasks } from '$stores/tasks.store';
  import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
  import TaskItem from './TaskItem.svelte';

  export let listID: string;

  let completedCollapsed = false;
  let sortedList: [string, Task][];

  function collapseCompletedTasks() {
    completedCollapsed = !completedCollapsed;
  }

  function getSortedList(tasks: Record<string, Task>, listID: string) {
    const tasksArr = Object.entries(tasks).filter(([, { listIDs }]) => listIDs.includes(listID));

    const completedTasks = tasksArr.filter(([, { completed }]) => completed);
    const incompleteTasks = tasksArr.filter(([, { completed }]) => !completed);

    return [...incompleteTasks, ...completedTasks];
  }

  $: sortedList = getSortedList($tasks, listID);
</script>

<div class="container">
  {#each sortedList as [taskID, { completed }], i}
    {#if completed && !sortedList[i - 1]?.[1].completed}
      <button
        on:click={collapseCompletedTasks}
        class="divider"
        class:is-first-task={(sortedList.length === 1 && completed) ||
          (i === 0 && sortedList[1][1]?.completed)}
      >
        <span class="icon">
          <Icon path={!completedCollapsed ? mdiChevronDown : mdiChevronRight} />
        </span>
        <span class="title">Completed</span>
      </button>
    {/if}

    {#if !(completed && completedCollapsed)}
      <TaskItem {listID} {taskID} />
    {/if}
  {/each}
</div>

<style lang="scss">
  .divider {
    background-color: rgba(var(--app-color-dark-rgb), 0.9);
    backdrop-filter: blur(10px);

    color: var(--app-color-light);
    fill: var(--app-color-light);
    font-family: 'Fira Code', monospace;
    font-size: 1.4rem;

    border: none;
    border-radius: 8px;

    padding: 0.3rem 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      display: flex;
      align-items: center;
    }

    &.is-first-task {
      margin-top: 1rem;
    }
  }
</style>

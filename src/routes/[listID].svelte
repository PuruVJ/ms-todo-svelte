<script>
  import { pullFromArray } from '$/helpers/array';
  import { page } from '$app/stores';
  import ListView from '$components/List/ListView.svelte';
  import SideNav from '$components/SideNav.svelte';
  import NewTask from '$components/Task/NewTask.svelte';
  import { lists } from '$stores/lists.store';
  import { tasks } from '$stores/tasks.store';
  import { endOfDay, isAfter, isPast } from 'date-fns';
  import { onMount } from 'svelte';

  $: list = $lists[$page.params.listID];

  onMount(() => {
    ensureMyDayTasks();
  });

  /**
   * Make sure old tasks are removed from `my-day` list
   */
  function ensureMyDayTasks() {
    for (let [taskID, { dateDue, listIDs }] of Object.entries($tasks)) {
      dateDue = new Date(dateDue);

      // If task is not in `my-day` list and is before due date
      if (!isPast(dateDue) && !listIDs.includes('my-day')) {
        $tasks[taskID].listIDs.push('my-day');
      }

      // If task is in `my-day` list and is after due date
      if (isPast(dateDue) && listIDs.includes('my-day')) {
        // Remove `my-day`
        $tasks[taskID].listIDs = pullFromArray(listIDs, 'my-day');
      }

      // If due date is after the end of today and task is not in `planned` list
      if (isAfter(dateDue, endOfDay(new Date())) && !listIDs.includes('planned')) {
        $tasks[taskID].listIDs.push('planned');
      }

      // If due date is before the end of today and task is in `planned` list
      if (!isAfter(dateDue, endOfDay(new Date())) && listIDs.includes('planned')) {
        $tasks[taskID].listIDs = pullFromArray(listIDs, 'planned');
      }
    }
  }
</script>

<div class="container">
  <SideNav />
  <main>
    {#if list !== undefined}
      <ListView {list} listID={$page.params.listID} />

      <NewTask listID={$page.params.listID} />
    {:else}
      Can't find list
    {/if}
  </main>
</div>

<style lang="scss">
  .container {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  main {
    height: 100%;

    padding-bottom: 4rem;

    overflow: auto;

    position: relative;
  }
</style>

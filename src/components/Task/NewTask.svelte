<script lang="ts">
  import Icon from '$components/Icon.svelte';
  import { lists } from '$stores/lists.store';
  import { type Task, tasks } from '$stores/tasks.store';
  import { mdiCheckboxBlankCircleOutline, mdiPlus, mdiSend } from '@mdi/js';
  import { endOfDay, format, isAfter, isPast, startOfDay } from 'date-fns';
  import { nanoid } from 'nanoid';

  export let listID: string;

  let taskVal = '';
  let dueDateStr = format(new Date(), 'yyyy-MM-dd');

  function createTask() {
    const dateDue = endOfDay(new Date(dueDateStr));

    // Do nothing if no value
    if (taskVal === '') return;

    let taskID: string;

    do taskID = nanoid();
    while (taskID in $tasks);

    const task: Task = {
      completed: false,
      dateCreated: startOfDay(new Date()),
      dateDue: isPast(dateDue) ? endOfDay(dateDue) : dateDue,
      listIDs: [
        ...new Set([
          'my-day',
          $lists[listID].type === 'preset' ? 'tasks' : listID,
          listID,
          ...(isAfter(dateDue, endOfDay(new Date())) ? ['planned'] : [])
        ])
      ],
      title: taskVal
    };

    $tasks[taskID] = task;

    // Cleanup
    taskVal = '';
    dueDateStr = format(new Date(), 'yyyy-MM-dd');
  }
</script>

<form on:submit|preventDefault={createTask}>
  <div class="container">
    <span class="init-icon">
      <Icon path={taskVal ? mdiCheckboxBlankCircleOutline : mdiPlus} />
    </span>

    <input
      name="new-task"
      bind:value={taskVal}
      placeholder="Add task in list {$lists[listID].title}"
      autocomplete="off"
    />

    <div class="button-container" class:hidden={!taskVal}>
      <input
        type="date"
        on:click|stopPropagation={undefined}
        bind:value={dueDateStr}
        class="task-input-button due-date-button"
        min={format(new Date(), 'yyyy-MM-dd')}
      />

      <button class="task-input-button submit-button" type="submit">
        <Icon path={mdiSend} />
      </button>
    </div>
  </div>
</form>

<style lang="scss">
  form {
    display: block;
    box-sizing: border-box;

    position: fixed;
    bottom: 0em;
    z-index: 2;

    width: calc(100vw - 334px);

    padding: 1.3rem 2rem;
  }

  .container {
    display: flex;
    box-sizing: border-box;

    border-radius: 0.5rem;

    background-color: rgba(var(--app-color-light-rgb), 0.6);
    backdrop-filter: blur(40px);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 5px 19px 7px;

    padding: 0 1rem;

    width: 100%;
    height: 3.3rem;

    cursor: text;
  }

  input {
    flex: 1 1 auto;

    box-sizing: border-box;
    border: none;

    background-color: transparent;

    color: var(--app-color-dark);
    font-size: 1.2rem;
    letter-spacing: 0.8px;
    line-height: 1.4;

    &:focus {
      box-shadow: none !important;
    }

    &::placeholder {
      color: rgba(var(--app-color-dark-rgb), 0.7);
    }
  }

  span.init-icon {
    fill: rgba(var(--app-color-dark-rgb), 0.7);

    display: grid;
    place-items: center;

    margin-right: 0.5rem;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .task-input-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    border: none;
    border-radius: 0.5rem;

    background: transparent;
    fill: var(--app-color-dark);
    color: var(--app-color-dark);

    height: 2.5rem;

    cursor: pointer;

    // transition: backdrop-filter 150ms ease-in-out;

    &:focus,
    &:hover {
      background-color: rgba(var(--app-color-dark-rgb), 0.1);
    }
  }

  .submit-button {
    width: 2.5rem;

    border-radius: 50%;
  }

  .due-date-button {
    width: 12rem;
  }
</style>

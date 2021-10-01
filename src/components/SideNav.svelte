<script lang="ts">
  import { lists } from '$stores/lists.store';
  import Icon from './Icon.svelte';

  const listsArr = Object.entries($lists);
</script>

<aside>
  <h2>Todo App</h2>
  <nav>
    {#each listsArr as [id, { icon, theme, title, type }], i}
      <a
        class:bordered={listsArr[i + 1]?.[1]?.type !== type}
        href="/{id}"
        aria-label="{title} list"
      >
        <span class="icon"> <Icon path={icon} fill={theme.color} /> </span>
        <span class="title">{title}</span>
      </a>
    {/each}

    <span id="spacer" />

    <!-- NewListButton -->
  </nav>
</aside>

<style lang="scss">
  aside {
    display: flex;
    flex-direction: column;

    width: 18rem;
    height: 100%;

    background-color: rgba(var(--app-color-light-rgb), 0.25);
    backdrop-filter: blur(40px);

    color: var(--app-color-light-contrast);

    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 6px 2px;
    border: solid 1px rgba(var(--app-color-light-rgb), 0.1);
  }

  nav {
    padding: 0;

    margin: 2rem 0;
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--app-color-dark);

    padding: 0.7rem 1rem;

    cursor: pointer;

    &:hover {
      background-color: rgba(var(--app-color-light-rgb), 0.1) !important;
    }

    &:visited {
      color: var(--app-color-dark);
    }

    &.bordered {
      border-bottom: solid 0.5px rgba(var(--app-color-dark-rgb), 0.3);
    }

    .icon {
      display: flex;
      align-items: center;

      padding-right: 1rem;
    }
  }

  #spacer {
    flex: 1 1 auto;
  }
</style>

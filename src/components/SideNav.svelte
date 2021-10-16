<script lang="ts">
  import Icon from '$components/Icon.svelte';
  import { themes } from '$data/themes';
  import { lists } from '$stores/lists.store';
  import NewListButton from './NewListButton.svelte';

  $: listsArr = Object.entries($lists);
</script>

<div class="container">
  <aside>
    <h2>Beautiful Todo</h2>
    <a href="https://github.com/PuruVJ/ms-todo-svelte" target="_blank" rel="noopener">
      Source Code
    </a>
    <nav>
      {#each listsArr as [id, { icon, theme, title, type }], i}
        <a
          class:bordered={listsArr.length - 1 !== i && listsArr[i + 1]?.[1]?.type !== type}
          href="/{id}"
          aria-label="{title} list"
        >
          <span class="icon">
            <Icon fill={themes[theme].color} path={icon} />
          </span>
          <span class="title">{title}</span>
        </a>
      {/each}
    </nav>

    <span class="spacer" />

    <NewListButton />
  </aside>
</div>

<style lang="scss">
  .container {
    width: 20rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  aside {
    display: flex;
    flex-direction: column;

    width: 90%;
    height: 96%;

    padding: 1rem 0 0;

    background-color: rgba(var(--app-color-light-rgb), 0.4);
    backdrop-filter: blur(70px);

    color: var(--app-color-light-contrast);

    box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.113), 0px 0px 17.9px rgba(0, 0, 0, 0.167),
      0px 0px 80px rgba(0, 0, 0, 0.28);
    border-radius: 1rem;

    a {
      font-size: 0.7rem;
      text-align: center;
      color: rgba(var(--app-color-dark-rgb), 0.8);

      width: 100%;
    }
  }

  h2 {
    text-align: center;
  }

  nav {
    padding: 0;

    margin: 2rem 0;

    height: 100%;

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
  }

  .spacer {
    flex: 1 1 auto;
  }
</style>

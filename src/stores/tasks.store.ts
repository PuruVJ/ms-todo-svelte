import { writable } from 'svelte-local-storage-store';

export type Task = {
  title: string;
  dateCreated: Date;
  dateDue: Date;
  listIDs: string[];
  completed: boolean;
};

export const tasks = writable<Record<string, Task>>('tasks', {});

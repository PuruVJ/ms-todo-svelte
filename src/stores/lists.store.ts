import type { Theme, themes } from '$data/themes';
import {
  mdiCalendarMonthOutline,
  mdiFormatListBulleted,
  mdiStarOutline,
  mdiWhiteBalanceSunny
} from '@mdi/js';
import { writable } from 'svelte-local-storage-store';

export type List = {
  title: string;
  theme: keyof typeof themes;
  type: 'preset' | 'custom';
  icon: string;
};

export const lists = writable<Record<string, List>>('lists', {
  'my-day': {
    icon: mdiWhiteBalanceSunny,
    title: 'My Day',
    type: 'preset',
    theme: 'blinding-beach'
  },
  important: {
    icon: mdiStarOutline,
    title: 'Important',
    type: 'preset',
    theme: 'tingy-blue-red'
  },
  planned: {
    icon: mdiCalendarMonthOutline,
    title: 'Planned',
    type: 'preset',
    theme: 'blue-green'
  },
  tasks: {
    icon: mdiFormatListBulleted,
    title: 'Tasks',
    type: 'preset',
    theme: 'pink-to-blue'
  }
});

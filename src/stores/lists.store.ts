import {
  mdiCalendarMonthOutline,
  mdiFormatListBulleted,
  mdiStarOutline,
  mdiWhiteBalanceSunny
} from '@mdi/js';
import { writable } from 'svelte/store';
import type { Theme } from '$data/themes';

export type List = {
  title: string;
  theme: Theme;
  type: 'preset' | 'custom';
  icon: string;
};

export const lists = writable<Record<string, List>>({
  'my-day': {
    icon: mdiWhiteBalanceSunny,
    title: 'My Day',
    type: 'preset',
    theme: {
      image: 'url(/wallpapers/6.jpg)',
      color: '#FFEE58'
    }
  },
  important: {
    icon: mdiStarOutline,
    title: 'Important',
    type: 'preset',
    theme: {
      image: 'linear-gradient(to left, #fc466b, #3f5efb)',
      color: '#E88796'
    }
  },
  planned: {
    icon: mdiCalendarMonthOutline,
    title: 'Planned',
    type: 'preset',
    theme: {
      image: 'linear-gradient(to left, #00f260, #0575e6)',
      color: '#50E29B'
    }
  },
  tasks: {
    icon: mdiFormatListBulleted,
    title: 'Tasks',
    type: 'preset',
    theme: {
      image: 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
      color: '#74C7FB'
    }
  }
});

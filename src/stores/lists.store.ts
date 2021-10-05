import type { Theme } from '$data/themes';
import { writable } from 'svelte-local-storage-store';
import type { SvelteComponentDev } from 'svelte/internal';
import Star12Regular from '~icons/fluent/star-12-regular';
import WeatherSunny32Filled from '~icons/fluent/weather-sunny-32-filled';
import Calendar from '~icons/fluent/calendar-ltr-24-regular';
import AllTasksIcon from '~icons/fluent/list-20-filled';

export type List = {
  title: string;
  theme: Theme;
  type: 'preset' | 'custom';
  icon: typeof SvelteComponentDev;
};

export const lists = writable<Record<string, List>>('lists', {
  'my-day': {
    icon: WeatherSunny32Filled,
    title: 'My Day',
    type: 'preset',
    theme: {
      image: 'url(/wallpapers/6.jpg)',
      color: '#FFEE58'
    }
  },
  important: {
    icon: Star12Regular,
    title: 'Important',
    type: 'preset',
    theme: {
      image: 'linear-gradient(to left, #fc466b, #3f5efb)',
      color: '#E88796'
    }
  },
  planned: {
    icon: Calendar,
    title: 'Planned',
    type: 'preset',
    theme: {
      image: 'linear-gradient(to left, #00f260, #0575e6)',
      color: '#50E29B'
    }
  },
  tasks: {
    icon: AllTasksIcon,
    title: 'Tasks',
    type: 'preset',
    theme: {
      image: 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
      color: '#74C7FB'
    }
  }
});

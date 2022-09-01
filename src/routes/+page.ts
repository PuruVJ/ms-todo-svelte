import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = () => {
  throw redirect(301, '/my-day');
};

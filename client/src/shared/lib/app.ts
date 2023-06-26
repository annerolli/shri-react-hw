import { APP_TITLE } from '../config';

export const createPageTitle = (...elements: string[]) =>
  [...elements, APP_TITLE].join(' | ');

import { Movie } from '@/shared/services/api';
import { FilterStrategy, Filters } from './types';

export const filterPropertyMap: Partial<Record<Filters, keyof Movie>> = {
  [Filters.TITLE]: 'title',
  [Filters.GENRE]: 'genre',
};

export const filterStrategyMap: Partial<Record<Filters, FilterStrategy>> = {
  [Filters.TITLE]: (value, filter) =>
    value.toLowerCase().includes(filter.toLowerCase().trim()),
  [Filters.GENRE]: (value, filter) => value === filter,
};

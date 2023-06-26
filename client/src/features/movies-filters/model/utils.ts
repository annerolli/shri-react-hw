import { Movie } from '@/shared/services/api';
import { FilterMap, Filters } from './types';
import { filterPropertyMap, filterStrategyMap } from './domain';

export const createQueryString = (
  name: string,
  value: string,
  init?: URLSearchParams | string
) => {
  const params = new URLSearchParams(init);
  params.set(name, value);

  return params.toString();
};

export const isFilter = (key: string): key is Filters =>
  Object.values(Filters).includes(key as unknown as Filters);

export const filterMovies = (data: Movie[], filters: FilterMap) => {
  return data.filter((movie) => {
    return Object.entries(filters).every(([filterName, filterValue]) => {
      if (!isFilter(filterName)) return true;
      if (filterValue === null) return true;

      const strategy = filterStrategyMap[filterName];
      if (strategy === undefined) return true;

      const property = filterPropertyMap[filterName];
      if (property === undefined) return true;

      const value = movie[property];

      // @ts-ignore
      return strategy(value, filterValue);
    });
  });
};

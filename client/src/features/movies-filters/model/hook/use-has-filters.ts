import { useMemo } from 'react';
import { useFilters } from './use-filters';
import { Filters } from '../types';

export function useHasFilters() {
  const filters = useFilters();

  return useMemo(() => {
    return Object.values(Filters).some((key) => filters.has(key));
  }, [filters]);
}

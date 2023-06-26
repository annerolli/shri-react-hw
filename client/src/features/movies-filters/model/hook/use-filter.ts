import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Filters, useFilters } from '..';
import { createQueryString } from '../utils';
import { useCallback, useMemo } from 'react';

export function useFilter(
  filterName: Filters
): [string | null, (value: string | null) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const filters = useFilters();

  const value = filters.get(filterName);
  const setValue = useCallback(
    (value: string | null) => {
      if (value === null || value === '') {
        const nextSearchParams = new URLSearchParams(filters.toString());
        nextSearchParams.delete(filterName);

        router.push(`${pathname}?${nextSearchParams.toString()}`, {
          shallow: true,
        });

        return;
      }

      router.push(
        `${pathname}?${createQueryString(
          filterName,
          value,
          filters.toString()
        )}`,
        { shallow: true }
      );
    },
    [router, pathname, filters, filterName]
  );

  return useMemo(() => [value, setValue], [value, setValue]);
}

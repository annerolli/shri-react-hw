import { useSearchParams } from 'next/navigation';

export function useFilters() {
  const searchParams = useSearchParams()!;

  return searchParams;
}

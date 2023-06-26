'use client';

import { FC, Suspense } from 'react';
import { Fallback } from './fallback';
import { CinemaFilters } from './cinema-filter';

export const Entry: FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <CinemaFilters />
    </Suspense>
  );
};

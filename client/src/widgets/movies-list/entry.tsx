import { FC } from 'react';
import { Layout } from './layout';
import { MoviesFilters } from '@/features/movies-filters';
import { MoviesList } from './movies-list';

export const Entry: FC = () => {
  return (
    <Layout>
      <MoviesFilters />
      <MoviesList />
    </Layout>
  );
};

import { FC } from 'react';
import { List } from './list';
import { useMovies } from './hooks/use-movies';
import { moviesFiltersModel } from '@/features/movies-filters';
import { Footnote } from '@/shared/ui/typography';

export const MoviesList: FC = () => {
  const movies = useMovies();
  const hasFilters = moviesFiltersModel.useHasFilters();

  if (hasFilters && movies.length === 0) {
    return <Footnote as="p">Ничего не найдено</Footnote>;
  }

  return <List data={movies} />;
};

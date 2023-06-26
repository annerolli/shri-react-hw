import { movieModel } from '@/entities/movie';
import { moviesFiltersModel } from '@/features/movies-filters';
import { use, useMemo } from 'react';

export function useMovies() {
  const [cinemaId] = moviesFiltersModel.useFilter(
    moviesFiltersModel.Filters.CINEMA
  );

  const promise = useMemo(() => {
    if (cinemaId === null) {
      return movieModel.getMovies();
    }

    return movieModel.getMovies({ cinemaId });
  }, [cinemaId]);

  const movies = use(promise);

  const [title] = moviesFiltersModel.useFilter(
    moviesFiltersModel.Filters.TITLE
  );
  const [genre] = moviesFiltersModel.useFilter(
    moviesFiltersModel.Filters.GENRE
  );

  const filteredMovies = useMemo(() => {
    if (movies === null) return [];

    return moviesFiltersModel.filterMovies(movies, {
      [moviesFiltersModel.Filters.TITLE]: title,
      [moviesFiltersModel.Filters.GENRE]: genre,
    });
  }, [movies, title, genre]);

  return filteredMovies;
}

import { Api, GetMoviesParams, MovieGenre } from '@/shared/services/api';

export const getMovies = (params?: GetMoviesParams) => Api.getMovies(params);

export const getLangGenre = (gener: MovieGenre) => {
  switch (gener) {
    case 'fantasy':
      return 'Фэнтези';
    case 'action':
      return 'Боевик';
    case 'comedy':
      return 'Комедия';
    case 'horror':
      return 'Ужасы';
  }
};

export const createPosterAlt = (title: string) => `Постер фильма "${title}"`;

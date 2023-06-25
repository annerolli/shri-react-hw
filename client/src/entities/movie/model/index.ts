import { Api, GetMoviesParams, MovieGenre } from '@/shared/services/api';

export const genreList = Object.values(MovieGenre);

export const getMovies = (params?: GetMoviesParams) => Api.getMovies(params);

export const getLangGenre = (gener: MovieGenre) => {
  switch (gener) {
    case MovieGenre.FANTASY:
      return 'Фэнтези';
    case MovieGenre.ACTION:
      return 'Боевик';
    case MovieGenre.COMEDY:
      return 'Комедия';
    case MovieGenre.HORROR:
      return 'Ужасы';
  }
};

export const createPosterAlt = (title: string) => `Постер фильма "${title}"`;

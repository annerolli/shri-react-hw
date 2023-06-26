import {
  Api,
  GetMovieParams,
  GetMoviesParams,
  MovieGenre,
} from '@/shared/services/api';

export const genreList = Object.values(MovieGenre);

let cache: Record<string, ReturnType<typeof Api.getMovies>> = {};
export const getMovies = (params?: GetMoviesParams) => {
  const key = JSON.stringify(params) || 'empty';
  if (!cache[key]) {
    cache[key] = Api.getMovies(params);
  }

  return cache[key];
};

export const getMovie = (params: GetMovieParams) => Api.getMovie(params);

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

import { API_URL } from '@/shared/config';
import { MovieApi } from './interfaces.internal';
import { Movie, GetMovieParams, GetMoviesParams } from './types';
import { CallApiMethodOptions } from './types.internal';

export class Api implements MovieApi {
  private readonly host = API_URL;

  getMovies(params?: GetMoviesParams) {
    return this.callApiMethod<Movie[]>({
      url: 'movies',
      params,
    });
  }

  getMovie(params: GetMovieParams) {
    return this.callApiMethod<Movie>({
      url: 'movie',
      params,
    });
  }

  private callApiMethod<T>({
    url,
    params,
    method = 'GET',
  }: CallApiMethodOptions): Promise<T> {
    const input = new URL(url, this.host);

    if (params !== undefined) {
      Object.entries(params).forEach(([key, value]) => {
        input.searchParams.set(key, value);
      });
    }

    return fetch(input, {
      method,
    }).then((response) => {
      if (!response.ok) {
        throw new Error('aboba');
      }

      return response.json();
    });
  }
}

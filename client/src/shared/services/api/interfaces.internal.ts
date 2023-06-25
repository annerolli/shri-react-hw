import { Movie, GetMovieParams, GetMoviesParams } from './types';

export interface MovieApi {
  getMovies(params: GetMoviesParams): Promise<Movie[]>;
  getMovie(params: GetMovieParams): Promise<Movie>;
}

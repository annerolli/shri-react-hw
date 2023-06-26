import { Movie, GetMovieParams, GetMoviesParams, Cinema } from './types';

export interface MovieApi {
  getMovies(params: GetMoviesParams): Promise<Movie[]>;
  getMovie(params: GetMovieParams): Promise<Movie>;
}

export interface CinemaApi {
  getCinemas(): Promise<Cinema[]>;
}

import {
  Movie,
  GetMovieParams,
  GetMoviesParams,
  Cinema,
  GetReviewsParams,
  Review,
} from './types';

export interface MovieApi {
  getMovies(params: GetMoviesParams): Promise<Movie[]>;
  getMovie(params: GetMovieParams): Promise<Movie>;
}

export interface CinemaApi {
  getCinemas(): Promise<Cinema[]>;
}

export interface ReviewApi {
  getReviews(params: GetReviewsParams): Promise<Review[]>;
}

export type Movie = {
  id: MovieId;
  title: string;
  posterUrl: string;
  description: string;
  genre: MovieGenre;
  rating: number;
  releaseYear: number;
  director: string;
};

export type MovieId = string;

export enum MovieGenre {
  FANTASY = 'fantasy',
  HORROR = 'horror',
  ACTION = 'action',
  COMEDY = 'comedy',
}

export type Cinema = {
  id: CinemaId;
  name: string;
  movieIds: MovieId[];
};

export type CinemaId = string;

export type Review = {
  name: string;
  text: string;
  rating: number;
};

export type GetMoviesParams = {
  cinemaId: CinemaId;
};

export type GetMovieParams = {
  movieId: MovieId;
};

export type GetReviewsParams = {
  movieId: MovieId;
};

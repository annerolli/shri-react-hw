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

export type MovieGenre = 'fantasy' | 'horror' | 'action' | 'comedy';

export type CinemaId = string;

export type GetMoviesParams = {
  cinemaId: CinemaId;
};

export type GetMovieParams = {
  movieId: MovieId;
};

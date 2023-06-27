import { RootState } from '@/app/store';
import { Movie, MovieId } from '@/shared/services/api';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  movies: Movie[];
};

const initialState: State = {
  movies: [],
};

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<MovieId>) {
      const index = state.movies.findIndex(({ id }) => id === action.payload);

      if (index === -1) {
        return;
      }

      state.movies.splice(index, 1);
    },
    removeAllMovie(state, action: PayloadAction<MovieId>) {
      state.movies = state.movies.filter(({ id }) => id !== action.payload);
    },
  },
});

export const calcMovieCount = (movieId: MovieId) => (state: RootState) =>
  state.cart.movies.filter(({ id }) => id === movieId).length;

export const getMoviesCount = (state: RootState) => state.cart.movies.length;

type U = {
  count: number;
  movie: Movie;
};

export const getUniqueMovies = (state: RootState) => {
  const ids = state.cart.movies.map(({ id }) => id);
  const uniqueIds = [...new Set(ids)];

  const result: Movie[] = [];

  uniqueIds.forEach((uniqueId) => {
    const movie = state.cart.movies.find(({ id }) => id === uniqueId);
    if (movie !== undefined) {
      result.push(movie);
    }
  });

  return result;
};

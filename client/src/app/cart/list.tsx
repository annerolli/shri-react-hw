'use client';

import { cartModel } from '@/entities/cart';
import { MovieCard } from '@/entities/movie';
import { AddMovieTicketToCart } from '@/features/add-movie-ticket-to-cart';
import s from './list.module.css';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Actions } from './actions';
import { RemoveAllMovieTicketsFromCart } from '@/features/remove-all-movie-tickets-from-cart';

export const List: FC = () => {
  const movies = useSelector(cartModel.getUniqueMovies);

  return (
    <ul className={s.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard
              data={movie}
              after={
                <Actions>
                  <AddMovieTicketToCart movie={movie} />
                  <RemoveAllMovieTicketsFromCart data={movie} />
                </Actions>
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

'use client';

import s from './entry.module.css';
import { cartModel } from '@/entities/cart';
import { Movie } from '@/shared/services/api';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './button';
import { IconMinus, IconPlus } from '@/shared/icons';
import { Subhead } from '@/shared/ui/typography';
import { checkCanAdd, checkCanRemove } from '../model';

interface Props {
  movie: Movie;
  children?: never;
}

export const Entry: FC<Props> = ({ movie }) => {
  const count = useSelector(cartModel.calcMovieCount(movie.id));
  const dispatch = useDispatch();

  const canAdd = checkCanAdd(count);
  const canRemove = checkCanRemove(count);

  const add = () => dispatch(cartModel.slice.actions.addMovie(movie));
  const remove = () => dispatch(cartModel.slice.actions.removeMovie(movie.id));

  return (
    <div className={s.layout}>
      <Button aria-label="Убрать" onClick={remove} disabled={!canRemove}>
        <IconMinus />
      </Button>
      <Subhead weight={600}>{count}</Subhead>
      <Button aria-label="Добавить" onClick={add} disabled={!canAdd}>
        <IconPlus />
      </Button>
    </div>
  );
};

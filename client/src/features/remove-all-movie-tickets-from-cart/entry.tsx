'use client';

import { cartModel } from '@/entities/cart';
import { IconClose } from '@/shared/icons';
import { Movie } from '@/shared/services/api';
import { IconButton } from '@/shared/ui/icon-button';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  data: Movie;
  children?: never;
}

export const Entry: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const remove = () =>
    dispatch(cartModel.slice.actions.removeAllMovie(data.id));

  return (
    <IconButton
      aria-label={`Удалить все билеты на фильм ${data.title}`}
      onClick={remove}
    >
      <IconClose />
    </IconButton>
  );
};

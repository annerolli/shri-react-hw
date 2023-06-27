'use client';

import s from './counter.module.css';
import { cartModel } from '@/entities/cart';
import { Footnote } from '@/shared/ui/typography';
import { FC } from 'react';
import { useSelector } from 'react-redux';

export const Counter: FC = () => {
  const count = useSelector(cartModel.getMoviesCount);

  if (cartModel.isEmpty(count)) {
    return null;
  }

  return (
    <Footnote as="span" className={s.counter}>
      {count}
    </Footnote>
  );
};

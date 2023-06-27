'use client';

import s from './total.module.css';
import { cartModel } from '@/entities/cart';
import { Card } from '@/shared/ui/card';
import { Subhead } from '@/shared/ui/typography';
import { FC } from 'react';
import { useSelector } from 'react-redux';

export const Total: FC = () => {
  const total = useSelector(cartModel.getMoviesCount);

  return (
    <Card className={s.total}>
      <Subhead weight={600}>Итого билетов:</Subhead>
      <Subhead weight={600}>{total}</Subhead>
    </Card>
  );
};

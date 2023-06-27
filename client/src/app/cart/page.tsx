'use client';

import { FC } from 'react';
import { createPageTitle } from '@/shared/lib/app';
import { List } from './list';
import { useSelector } from 'react-redux';
import { cartModel } from '@/entities/cart';
import { Paragraph } from '@/shared/ui/typography';
import { Total } from './total';

const PAGE_TITLE = 'Корзина';

const CartPage: FC = () => {
  const total = useSelector(cartModel.getMoviesCount);

  if (cartModel.isEmpty(total)) {
    return <Paragraph>Корзина пуста</Paragraph>;
  }

  return (
    <>
      <List />
      <Total />
    </>
  );
};

export const metadata = {
  title: createPageTitle(PAGE_TITLE),
};

export default CartPage;

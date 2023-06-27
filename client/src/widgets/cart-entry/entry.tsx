import s from './entry.module.css';
import { IconBasket } from '@/shared/icons';
import Link from 'next/link';
import { FC } from 'react';
import { Counter } from './counter';

export const CartEntry: FC = () => {
  return (
    <Link className={s.layout} href="/cart" aria-label="Перейти в Корзину">
      <Counter />
      <IconBasket width={32} height={32} />
    </Link>
  );
};

import { FC } from 'react';
import { Logo } from '@/widgets/logo';
import s from './header.module.css';
import clsx from 'clsx';
import { CartEntry } from '../cart-entry';

interface Props {
  children?: never;
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={clsx(className, s.header)}>
      <Logo />
      <CartEntry />
    </header>
  );
};

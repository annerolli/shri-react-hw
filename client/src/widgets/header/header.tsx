import { FC } from 'react';
import { Logo } from '@/widgets/logo';
import s from './header.module.css';
import clsx from 'clsx';

interface Props {
  children?: never;
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={clsx(className, s.header)}>
      <Logo />
    </header>
  );
};

import { FC } from 'react';
import s from './footer.module.css';
import clsx from 'clsx';
import { NavMenu } from '@/widgets/nav-menu';

interface Props {
  children?: never;
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx(className, s.footer)}>
      <NavMenu />
    </footer>
  );
};

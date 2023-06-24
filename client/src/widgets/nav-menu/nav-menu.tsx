import s from './nav-menu.module.css';
import { FC } from 'react';
import { items } from './model';
import Link from 'next/link';

interface Props {
  children?: never;
}

export const NavMenu: FC<Props> = () => {
  return (
    <nav>
      <ul className={s.nav_list}>
        {items.map(({ title, path }, index) => {
          return (
            <li key={index}>
              <Link href={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

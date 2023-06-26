import s from './layout.module.css';
import { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

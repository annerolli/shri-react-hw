import { FC, PropsWithChildren } from 'react';
import s from './actions.module.css';

export const Actions: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.actions}>{children}</div>;
};

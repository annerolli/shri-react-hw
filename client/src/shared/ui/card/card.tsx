import clsx from 'clsx';
import s from './card.module.css';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Card: FC<Props> = ({ className, children }) => {
  return <div className={clsx(className, s.card)}>{children}</div>;
};

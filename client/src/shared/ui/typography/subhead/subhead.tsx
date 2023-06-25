import s from './subhead.module.css';
import clsx from 'clsx';
import { FC } from 'react';
import { Heading, HeadingProps } from '../heading';

export const Subhead: FC<HeadingProps> = (props) => {
  return <Heading {...props} className={clsx(props.className, s.subhead)} />;
};

import s from './title.module.css';
import clsx from 'clsx';
import { FC } from 'react';
import { Heading, HeadingProps } from '../heading';

export const Title: FC<HeadingProps> = (props) => {
  return <Heading {...props} className={clsx(props.className, s.title)} />;
};

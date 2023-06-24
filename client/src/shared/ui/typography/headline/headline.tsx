import s from './headline.module.css';
import clsx from 'clsx';
import { FC } from 'react';
import { Heading, HeadingProps } from '../heading';

export const Headline: FC<HeadingProps> = (props) => {
  return <Heading {...props} className={clsx(props.className, s.headline)} />;
};

import s from './headline.module.css';
import clsx from 'clsx';
import { ElementType, FC } from 'react';
import { Base, TypographyProps } from '../base';

interface Props extends TypographyProps {
  as?: Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}

export const Headline: FC<Props> = ({ as: Component = 'h1', ...props }) => {
  return (
    <Base
      {...props}
      as={Component}
      className={clsx(props.className, s.headline)}
    />
  );
};

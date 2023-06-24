import s from './paragraph.module.css';
import clsx from 'clsx';
import { ElementType, FC } from 'react';
import { Base, TypographyProps } from '../base';

interface Props extends TypographyProps {
  as?: Extract<ElementType, 'span' | 'div' | 'p' | 'b' | 'strong' | 'i'>;
}

export const Paragraph: FC<Props> = ({ as: Component = 'p', ...props }) => {
  return (
    <Base
      {...props}
      as={Component}
      className={clsx(props.className, s.paragraph)}
    />
  );
};

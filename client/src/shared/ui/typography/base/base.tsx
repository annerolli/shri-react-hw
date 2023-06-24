import s from './base.module.css';
import clsx from 'clsx';
import {
  ElementType,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  weight?: 400 | 600 | 700;
  children: ReactNode;
}

export const Base: FC<TypographyProps> = ({
  as: Component = 'span',
  weight = 400,
  children,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={clsx(props.className, s[`base-weight-${weight}`])}
    >
      {children}
    </Component>
  );
};

import s from './title.module.css';
import clsx from 'clsx';
import { ElementType, FC, HTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  as?: ElementType;
  weight?: 400 | 600 | 700;
}> &
  HTMLAttributes<HTMLElement>;

export const Title: FC<Props> = ({
  as: Component = 'h1',
  weight = 400,
  children,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={clsx(props.className, s.title, s[`title-weight-${weight}`])}
    >
      {children}
    </Component>
  );
};

import s from './paragraph.module.css';
import clsx from 'clsx';
import { ElementType, FC, HTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  as?: ElementType;
}> &
  HTMLAttributes<HTMLElement>;

export const Paragraph: FC<Props> = ({
  as: Component = 'p',
  children,
  ...props
}) => {
  return (
    <Component {...props} className={clsx(props.className, s.paragraph)}>
      {children}
    </Component>
  );
};

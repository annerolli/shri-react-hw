import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import s from './icon-button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
}

export const IconButton: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(props.className, s.button)}
    >
      {children}
    </button>
  );
};

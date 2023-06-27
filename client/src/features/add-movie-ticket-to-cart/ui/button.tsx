import s from './button.module.css';
import clsx from 'clsx';
import { FC, ButtonHTMLAttributes } from 'react';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {}

export const Button: FC<Props> = (props) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx(props.className, s.button)}
    />
  );
};

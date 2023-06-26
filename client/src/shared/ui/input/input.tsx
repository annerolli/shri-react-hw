import s from './input.module.css';
import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<Props> = (props) => {
  return <input {...props} className={clsx(props.className, s.input)} />;
};

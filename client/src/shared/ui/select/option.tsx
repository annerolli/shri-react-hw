import s from './option.module.css';
import { ButtonHTMLAttributes, FC } from 'react';
import { SelectOption } from './types';

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  data: SelectOption;
  onClick?: (data: SelectOption) => void;
}

export const Option: FC<Props> = ({
  type = 'button',
  data,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    onClick?.(data);
  };

  return (
    <button {...props} className={s.option} type={type} onClick={handleClick}>
      {data.title}
    </button>
  );
};

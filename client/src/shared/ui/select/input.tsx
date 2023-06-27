import s from './input.module.css';
import { FC, MouseEvent } from 'react';
import { Footnote } from '@/shared/ui/typography';
import clsx from 'clsx';
import { IconClose, IconDropDown } from '@/shared/icons';
import { SelectOption } from './types';
import { IconButton } from '../icon-button';

interface Props {
  isActive: boolean;
  placeholder?: string;
  value?: SelectOption | null;
  onToggle: VoidFunction;
  onReset: VoidFunction;
  disabled?: boolean;
}

export const Input: FC<Props> = ({
  isActive,
  placeholder = 'Выберите элемент',
  value = null,
  onToggle,
  onReset,
  disabled,
}) => {
  const hasValue = value !== null;

  const handleResetClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onReset();
  };

  return (
    <button
      type="button"
      className={clsx(
        s.root,
        isActive && s['root-active'],
        hasValue && s['root-selected']
      )}
      onClick={onToggle}
      disabled={disabled}
    >
      <Footnote as="span" className={s.content}>
        {hasValue ? value.title : placeholder}
      </Footnote>

      <span className={s.actions}>
        {hasValue && (
          <IconButton aria-label="Сбросить выбор" onClick={handleResetClick}>
            <IconClose />
          </IconButton>
        )}

        <IconDropDown width={20} height={20} className={s.icon} />
      </span>
    </button>
  );
};

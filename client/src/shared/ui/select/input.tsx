import s from './input.module.css';
import { FC } from 'react';
import { Footnote } from '@/shared/ui/typography';
import clsx from 'clsx';
import { IconDropDown } from '@/shared/icons';

interface Props {
  isActive: boolean;
  placeholder?: string;
  title?: string | null;
  onToggle: VoidFunction;
  disabled?: boolean;
}

export const Input: FC<Props> = ({
  isActive,
  placeholder = 'Выберите элемент',
  title = null,
  onToggle,
  disabled,
}) => {
  const hasTitle = title !== null;

  return (
    <button
      type="button"
      className={clsx(
        s.root,
        isActive && s['root-active'],
        hasTitle && s['root-selected']
      )}
      onClick={onToggle}
      disabled={disabled}
    >
      <Footnote as="span" className={s.content}>
        {hasTitle ? title : placeholder}
      </Footnote>

      <IconDropDown width={20} height={20} className={s.icon} />
    </button>
  );
};

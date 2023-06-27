import s from './select.module.css';
import { FC, useMemo, useState } from 'react';
import clsx from 'clsx';
import { useToggle } from '@/shared/hooks/use-toggle';
import { ChangeEventHandler, SelectOption } from './types';
import { Option } from './option';
import { Input } from './input';

interface Props {
  data: SelectOption[];
  defaultValue?: string | null;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  children?: never;
}

/**
 * @todo сброс выбора
 * @todo value prop
 */
export const Select: FC<Props> = ({
  data = [],
  defaultValue = null,
  onChange,
  placeholder,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue
  );

  const { isOn, off, toggle } = useToggle();

  const hasData = data.length > 0;

  const selectItem = useMemo(
    () => data.find(({ value }) => value === selectedValue),
    [data, selectedValue]
  );

  const handleOptionClick = ({ value }: SelectOption) => {
    setSelectedValue(value);
    off();
    onChange?.({ value });
  };

  const reset = () => {
    setSelectedValue(null);

    onChange?.({ value: null });
  };

  return (
    <div {...props} className={s.select}>
      <Input
        value={selectItem}
        placeholder={placeholder}
        isActive={isOn}
        onToggle={toggle}
        onReset={reset}
        disabled={!hasData}
      />

      {hasData && (
        <ul
          className={clsx(
            s.select_options,
            isOn && s['select_options-visible']
          )}
        >
          {data.map((item) => {
            return (
              <li key={item.value}>
                <Option data={item} onClick={handleOptionClick} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

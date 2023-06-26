import { ChangeEvent, FC } from 'react';
import { Filters, useFilter } from '../../model';
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';

/**
 *
 * @todo debounce?
 */
export const TitleFilter: FC = () => {
  const [value, setValue] = useFilter(Filters.TITLE);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Label name="Название">
      <Input
        type="search"
        name={Filters.TITLE}
        defaultValue={value || ''}
        onChange={handleChange}
        placeholder="Введите название"
      />
    </Label>
  );
};

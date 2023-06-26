import { cinemaModel } from '@/entities/cinema';
import { Label } from '@/shared/ui/label';
import { ChangeEventHandler, Select, SelectOption } from '@/shared/ui/select';
import { FC, use, useMemo } from 'react';
import { Filters, useFilter } from '../../model';

export const CinemaFilters: FC = () => {
  // const promise = useMemo(() => cinemaModel.getCinemas(), []);
  const cinemas = use(cinemaModel.getCinemas());

  const [value, setValue] = useFilter(Filters.CINEMA);
  const options = useMemo<SelectOption[]>(
    () =>
      cinemas.map(({ id, name }) => {
        return {
          title: name,
          value: id,
        };
      }),
    [cinemas]
  );

  const handleChange: ChangeEventHandler = ({ value }) => {
    setValue(value);
  };

  return (
    <Label name="Кинотеатр">
      <Select
        data={options}
        defaultValue={value}
        placeholder="Выберите кинотеатр"
        onChange={handleChange}
      />
    </Label>
  );
};

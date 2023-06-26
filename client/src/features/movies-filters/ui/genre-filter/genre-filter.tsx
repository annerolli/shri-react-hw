import { FC, useMemo } from 'react';
import { Filters, useFilter } from '../../model';
import { movieModel } from '@/entities/movie';
import { Label } from '@/shared/ui/label';
import { ChangeEventHandler, Select, SelectOption } from '@/shared/ui/select';

export const GenreFilter: FC = () => {
  const [value, setValue] = useFilter(Filters.GENRE);
  const options = useMemo<SelectOption[]>(
    () =>
      movieModel.genreList.map((value) => {
        return {
          value,
          title: movieModel.getLangGenre(value),
        };
      }),
    []
  );

  const handleChange: ChangeEventHandler = ({ value }) => {
    setValue(value);
  };

  return (
    <Label name="Жанр">
      <Select
        data={options}
        defaultValue={value}
        placeholder="Выберите жанр"
        onChange={handleChange}
      />
    </Label>
  );
};

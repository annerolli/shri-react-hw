import { Label } from '@/shared/ui/label';
import { Select } from '@/shared/ui/select';
import { FC } from 'react';

export const Fallback: FC = () => {
  return (
    <Label name="Кинотеатр">
      <Select placeholder="Выберите кинотеатр" />
    </Label>
  );
};

import s from './label.module.css';
import { Footnote } from '@/shared/ui/typography';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  name: ReactNode;
}

export const Label: FC<Props> = ({ name, children }) => {
  return (
    <label className={s.label}>
      <Footnote className={s.label_name} as="span">
        {name}
      </Footnote>
      <div>{children}</div>
    </label>
  );
};

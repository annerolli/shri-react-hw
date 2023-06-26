'use client';

import s from './filters.module.css';
import { Card } from '@/shared/ui/card';
import { Paragraph } from '@/shared/ui/typography';
import { FC } from 'react';
import { TitleFilter } from '../title-filter';
import { GenreFilter } from '../genre-filter';
import { CinemaFilters } from '../cinema-filter';

/**
 * @todo разметить заголовок
 */
export const Entry: FC = () => {
  return (
    <Card>
      <Paragraph weight={600}>Фильтр поиска</Paragraph>
      <form className={s.filters_form}>
        <TitleFilter />
        <GenreFilter />
        <CinemaFilters />
      </form>
    </Card>
  );
};

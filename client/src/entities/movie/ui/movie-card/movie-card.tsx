import s from './movie-card.module.css';
import { Movie } from '@/shared/services/api';
import { Card } from '@/shared/ui/card';
import { Paragraph, Subhead } from '@/shared/ui/typography';
import { FC, ReactNode } from 'react';
import { getLangGenre } from '../../model';
import { MoviePoster } from '../movie-poster';
import clsx from 'clsx';

interface Props {
  data: Movie;
  after?: ReactNode;
  className?: string;
  children?: never;
}

export const MovieCard: FC<Props> = ({ data, className, after }) => {
  return (
    <Card className={clsx(className, s.card)}>
      <div className={s.card_before}>
        <MoviePoster size="s" data={data} />
      </div>
      <div className={s.card_main}>
        <Subhead as="h3" weight={600}>
          {data.title}
        </Subhead>
        <Paragraph as="i" className={s.card_genre}>
          {getLangGenre(data.genre)}
        </Paragraph>
      </div>
      {Boolean(after) && <div className={s.card_after}>{after}</div>}
    </Card>
  );
};

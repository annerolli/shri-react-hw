import s from './movie-rich-card.module.css';
import { Movie } from '@/shared/services/api';
import { FC, ReactNode } from 'react';
import { MoviePoster } from '../movie-poster';
import { Card } from '@/shared/ui/card';
import { Paragraph, Subhead, Title } from '@/shared/ui/typography';
import { movieModel } from '../..';

interface Props {
  data: Movie;
  after?: ReactNode;
  children?: never;
}

export const MovieRichCard: FC<Props> = ({ data, after }) => {
  return (
    <Card className={s.card}>
      <div className={s.card_before}>
        <MoviePoster data={data} size="l" />
      </div>

      <div className={s.card_main}>
        <header className={s.card_header}>
          <Title weight={600} className={s.card_title}>
            {data.title}
          </Title>
          {Boolean(after) && <div className={s.card_after}>{after}</div>}
        </header>

        <ul className={s.card_meta}>
          <li>
            <Subhead>
              <b>Жанр:</b> {movieModel.getLangGenre(data.genre)}
            </Subhead>
          </li>
          <li>
            <Subhead>
              <b>Год выпуска:</b> {data.releaseYear}
            </Subhead>
          </li>
          <li>
            <Subhead>
              <b>Рейтинг:</b> {data.rating}
            </Subhead>
          </li>
          <li>
            <Subhead>
              <b>Режиссёр:</b> {data.director}
            </Subhead>
          </li>
        </ul>

        <div className={s.card_description}>
          <Subhead weight={600}>Описание</Subhead>
          <Paragraph>{data.description}</Paragraph>
        </div>
      </div>
    </Card>
  );
};

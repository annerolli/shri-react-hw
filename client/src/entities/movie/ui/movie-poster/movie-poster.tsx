/* Не используем next/image, потому что он требует указывать конкретные значения ширины */
/* eslint-disable @next/next/no-img-element */
import s from './movie-poster.module.css';
import { Movie } from '@/shared/services/api';
import { FC } from 'react';
import { createPosterAlt } from '../../model';
import clsx from 'clsx';

interface Props {
  data: Movie;
  size: 's' | 'l';
  children?: never;
}

export const MoviePoster: FC<Props> = ({ data, size = 's' }) => {
  return (
    <div className={clsx(s.poster, s[`poster-size-${size}`])}>
      <img
        className={s.poster_image}
        src={data.posterUrl}
        width="100%"
        loading="lazy"
        alt={createPosterAlt(data.title)}
      />
    </div>
  );
};

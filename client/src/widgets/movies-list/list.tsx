import s from './list.module.css';
import { MovieCard } from '@/entities/movie';
import { Movie } from '@/shared/services/api';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  data: Movie[];
}

export const List: FC<Props> = ({ data }) => {
  return (
    <ul className={s.list}>
      {data.map((movie) => (
        <li key={movie.id}>
          <Link href={`movies/${movie.id}`}>
            <MovieCard data={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

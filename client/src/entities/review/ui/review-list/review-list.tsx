import { Review } from '@/shared/services/api';
import s from './review-list.module.css';
import { FC } from 'react';
import { ReviewCard } from '../review-card';
import clsx from 'clsx';
import { Footnote } from '@/shared/ui/typography';

interface Props {
  data: Review[];
  className?: string;
  children?: never;
}

export const ReviewList: FC<Props> = ({ className, data }) => {
  if (data.length === 0) {
    return <Footnote>Отзовов нет</Footnote>;
  }

  return (
    <ul className={clsx(className, s.list)}>
      {data.map((review, index) => {
        return (
          <li key={index}>
            <ReviewCard data={review} />
          </li>
        );
      })}
    </ul>
  );
};

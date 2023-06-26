import { Review } from '@/shared/services/api';
import s from './review-card.module.css';
import { FC } from 'react';
import { Card } from '@/shared/ui/card';
import clsx from 'clsx';
import Image from 'next/image';
import { Footnote, Subhead } from '@/shared/ui/typography';

interface Props {
  data: Review;
  className?: string;
  children?: never;
}

export const ReviewCard: FC<Props> = ({ className, data }) => {
  return (
    <Card className={clsx(className, s.card)}>
      <Image
        className={s.card_before}
        src="/thumb.svg"
        width={100}
        height={100}
        alt=""
      />
      <div className={s.card_main}>
        <header className={s.card_header}>
          <Subhead className={s.card_name} weight={600}>
            {data.name}
          </Subhead>
          <Subhead className={s.card_rating}>
            Оценка: <b>{data.rating}</b>
          </Subhead>
        </header>
        <Footnote>{data.text}</Footnote>
      </div>
    </Card>
  );
};

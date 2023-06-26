import { MovieRichCard } from '@/entities/movie/ui/movie-rich-card';
import { ReviewList } from '@/entities/review/ui/review-list';
import { APP_TITLE } from '@/shared/config';
import { createPageTitle } from '@/shared/lib/app';
import { Api } from '@/shared/services/api';
import { FC } from 'react';

type Props = {
  params: {
    id: string;
  };
};

const MoviePage: FC<Props> = async ({ params }) => {
  const [movie, reviews] = await Promise.all([
    Api.getMovie({ movieId: params.id }),
    Api.getReviews({ movieId: params.id }),
  ]);

  return (
    <>
      <MovieRichCard data={movie} />
      <ReviewList data={reviews} />
    </>
  );
};

export async function generateMetadata({ params }: Props) {
  const data = await Api.getMovie({ movieId: params.id });

  return {
    title: createPageTitle(data.title),
    description: data.description,
  };
}

export default MoviePage;

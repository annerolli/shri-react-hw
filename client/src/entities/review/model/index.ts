import { Api, GetReviewsParams } from '@/shared/services/api';

export const getReviews = (params: GetReviewsParams) => Api.getReviews(params);

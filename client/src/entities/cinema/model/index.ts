import { Api } from '@/shared/services/api';

let cachedPromise: ReturnType<typeof Api.getCinemas>;
export const getCinemas = () => {
  if (!cachedPromise) {
    cachedPromise = Api.getCinemas();
  }

  return cachedPromise;
};

import { cartModel } from '@/entities/cart';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [cartModel.slice.name]: cartModel.slice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

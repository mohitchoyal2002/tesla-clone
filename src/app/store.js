import { configureStore } from '@reduxjs/toolkit';
import CarSlice from '../features/CarSlice';

export const store = configureStore({
  reducer: {
    car: CarSlice
  },
});

import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './slices/dataSlice';
import gamesReducer from './slices/gamesSlice';


export const store = configureStore({
  reducer: {
    data:dataSlice,
    games: gamesReducer,

  }
});

export default store;
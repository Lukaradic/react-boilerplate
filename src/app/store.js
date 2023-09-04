import { configureStore } from '@reduxjs/toolkit'
import searchSlice from '../features/search/search-slice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
})
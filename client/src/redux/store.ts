import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './reducers/tracks'

export const store = configureStore({
  reducer: {
    tracks: tracksReducer
  },
})
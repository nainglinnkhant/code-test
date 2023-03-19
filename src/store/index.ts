import { configureStore } from '@reduxjs/toolkit'

import postsSlice from './posts/postsSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

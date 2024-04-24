import { configureStore } from '@reduxjs/toolkit'
import { count } from 'console'
import search from './counter/searchSlice.slice'
// ...

export const store = configureStore({
  reducer: {
    // product : counterSlice,
    
    search: search,
    
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
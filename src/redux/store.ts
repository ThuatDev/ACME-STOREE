import { configureStore } from '@reduxjs/toolkit'
import { count } from 'console'
import counterSlice from './counter/counter.slice'
// ...

export const store = configureStore({
  reducer: {
    product : counterSlice,
    
    
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
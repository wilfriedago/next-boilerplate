import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

const reducers = {
  // Add your other reducers here
}

const middlewares: any[] = [
  // Add your middlewares here
]

export const AppStore = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(AppStore.dispatch)

export type RootState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch

import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./features/user/userSlice"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}

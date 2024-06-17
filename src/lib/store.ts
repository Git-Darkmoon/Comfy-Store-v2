import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./features/user/userSlice"

export const store = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
  store: AppStore
}

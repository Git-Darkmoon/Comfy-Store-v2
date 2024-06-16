import { createSlice } from "@reduxjs/toolkit"
import { type User } from "../../types"

type userState = {
  user: User | null
}

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user")
  if (!user) return null

  return JSON.parse(user)
}

const initialUserState: userState = {
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
})

export const userReducer = userSlice.reducer

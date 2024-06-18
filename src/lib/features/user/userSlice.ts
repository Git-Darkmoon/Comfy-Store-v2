"use client"

import { createSlice } from "@reduxjs/toolkit"
import { type User } from "../../../utils/types"

type userState = {
  user: User | null
}

const getUserFromLocalStorage = (): User | null => {
  let user: string | null = ""
  if (typeof window !== "undefined") {
    user = localStorage.getItem("user")

    if (!user) return null
  }
  return user ? JSON.parse(user) : null
}

const initialUserState: userState = {
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (state, action) => {
      const loggedUser = action.payload
      localStorage.setItem("user", JSON.stringify(loggedUser))

      state.user = loggedUser
    },
  },
})

export const userReducer = userSlice.reducer

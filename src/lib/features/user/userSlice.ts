"use client"

import { createSlice } from "@reduxjs/toolkit"
import { type User } from "../../../utils/types"
import { loginUserRequest } from "@/services/comfy"

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

function makeUserLogin(credentials: any) {
  loginUserRequest(credentials)
    .then((res) => {})
    .catch(() => {})
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (state, action) => {
      const loggedUser = action.payload
      const test = loginUserRequest(loggedUser)
      console.log(test)

      localStorage.setItem("user", JSON.stringify(loggedUser))

      state.user = loggedUser
    },
  },
})

export const { loginUser } = userSlice.actions
export const userReducer = userSlice.reducer

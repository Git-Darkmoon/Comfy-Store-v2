"use client"

import { createSlice } from "@reduxjs/toolkit"
import { loginCredentials, type User } from "../../../utils/types"
import { loginUserRequest } from "@/services/comfy"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"
import Router from "next/router"

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

function makeUserLogin(credentials: loginCredentials) {
  loginUserRequest(credentials)
    .then((res) => {
      return redirect("/")
    })
    .catch((error) => {
      console.log(error)
      toast.error(error as string)
    })
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (state, action) => {
      const credentials: loginCredentials = action.payload
      makeUserLogin(credentials)

      localStorage.setItem("user", JSON.stringify(credentials))

      state.user = credentials
    },
  },
})

export const { loginUser } = userSlice.actions
export const userReducer = userSlice.reducer

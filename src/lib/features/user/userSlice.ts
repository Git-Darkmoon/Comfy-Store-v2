"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginCredentials, type User } from "../../../utils/types"
import { loginUserRequest } from "@/services/comfy"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

type userState = {
  user: User | null
  isLoading: boolean
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
  isLoading: false,
}

export const makeUserLogin = createAsyncThunk(
  "user/loginUser",
  async (credentials: loginCredentials) => {
    try {
      const response = await loginUserRequest(credentials)
      return response.data // Only returning the data you need
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error)
      toast.error(errorMessage)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(makeUserLogin.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(makeUserLogin.fulfilled, (state, action) => {
      const credentials: loginCredentials = action?.payload
      localStorage.setItem("user", JSON.stringify(credentials))
      state.user = credentials

      state.isLoading = false
    })

    builder.addCase(makeUserLogin.rejected, (state, action) => {
      toast.error(action.error.message as string)

      state.isLoading = false
    })
  },
})

// export const { loginUser } = userSlice.actions
export const userReducer = userSlice.reducer

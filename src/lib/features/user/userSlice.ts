"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginCredentials, userLoginAPIResponse } from "../../../utils/types"
import { loginUserRequest } from "@/services/comfy"
import toast from "react-hot-toast"
import { deleteCookie, getCookie, setCookie } from "cookies-next"

type userState = {
  user: userLoginAPIResponse | null
  isLoading: boolean
}

const getFromLocalStorage = (): userLoginAPIResponse | null => {
  const user = getCookie("user")
  if (user) {
    return JSON.parse(user)
  }
  return null
}

const initialUserState: userState = {
  user: getFromLocalStorage(),
  isLoading: false,
}

export const makeUserLogin = createAsyncThunk(
  "user/loginUser",
  async (credentials: loginCredentials) => {
    try {
      const response = await loginUserRequest(credentials)
      return response.data
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
  reducers: {
    logoutUser: (state) => {
      state.user = null
      deleteCookie("user")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeUserLogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(makeUserLogin.fulfilled, (state, action) => {
        const credentials: loginCredentials & userLoginAPIResponse =
          action?.payload
        setCookie("user", JSON.stringify(credentials))
        state.user = credentials

        state.isLoading = false
      })
      .addCase(makeUserLogin.rejected, (state, action) => {
        toast.error(action.error.message as string)

        state.isLoading = false
      })
  },
})

export const { logoutUser } = userSlice.actions
export const userReducer = userSlice.reducer

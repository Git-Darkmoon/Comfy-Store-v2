import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  loginCredentials,
  userLoginAPIResponse,
  type User,
} from "../../../utils/types"
import { loginUserRequest } from "@/services/comfy"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

type userState = {
  user: userLoginAPIResponse | null
  isLoading: boolean
}

const initialUserState: userState = {
  user: null,
  isLoading: false,
}

export const makeUserLogin = createAsyncThunk(
  "user/loginUser",
  async (credentials: loginCredentials, { rejectWithValue }) => {
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
      localStorage.removeItem("user")
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
        localStorage.setItem("user", JSON.stringify(credentials))
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

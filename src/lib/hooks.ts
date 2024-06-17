import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./store"
import { useQuery } from "@tanstack/react-query"
import { loginUser } from "@/services/comfy"
import { loginCredentials } from "@/utils/types"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// export const useLoginUser = (credentials: loginCredentials) => {
//   return useQuery({
//     queryKey: ["loggedUser"],
//     queryFn: () => loginUser(credentials),
//   })
// }

import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./store"
import { useQuery } from "@tanstack/react-query"
import { getFeaturedProducts, getProducts } from "@/services/comfy"
import { ProductsAPIResponse } from "@/utils/types"
import { useLocalStorage } from "./utils"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useGetProducts = () => {
  return useQuery<ProductsAPIResponse>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 30_000,
  })
}

export const useGetFeaturedProducts = () => {
  return useQuery<ProductsAPIResponse>({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
    staleTime: 30_000,
  })
}

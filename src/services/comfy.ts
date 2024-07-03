import { ProductsAPIResponse, loginCredentials } from "@/utils/types"
import {
  callGetHttpAdapter,
  callPostHttpAdapter,
} from "./Adapter/CallHttpAdapter"

export async function loginUserRequest(
  credentials: loginCredentials
): Promise<any> {
  const response = await callPostHttpAdapter("/auth/local", credentials)
  return response
}

export async function getProducts(): Promise<any> {
  const response = await callGetHttpAdapter("/products", (data) => data)
  return response.data as ProductsAPIResponse
}

export async function getFeaturedProducts(): Promise<any> {
  const response = await callGetHttpAdapter(
    "/products?featured=true",
    (data) => data
  )
  return response.data as ProductsAPIResponse
}

import { loginCredentials } from "@/utils/types"
import { callPostHttpAdapter } from "./Adapter/CallHttpAdapter"

export async function loginUser(credentials: loginCredentials): Promise<any> {
  const response = await callPostHttpAdapter("/auth/local", credentials)
  return response
}

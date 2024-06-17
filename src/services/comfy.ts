import { callPostHttpAdapter } from "./Adapter/CallHttpAdapter"

type loginCredentials = {
  email: string
  password: string
}

export async function loginUser(credentials: loginCredentials): Promise<any> {
  const response = await callPostHttpAdapter("/auth/local", credentials)
  return response
}

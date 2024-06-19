"use client"

import AccountForm from "../AccountForm"
import { useAppDispatch } from "@/lib/hooks"
import { makeUserLogin } from "@/lib/features/user/userSlice"
import { loginCredentials } from "@/utils/types"

function Login() {
  const dispatch = useAppDispatch()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    dispatch(makeUserLogin(data as loginCredentials))
  }

  return <AccountForm submitHandler={handleSubmit} variant="login" />
}
export default Login

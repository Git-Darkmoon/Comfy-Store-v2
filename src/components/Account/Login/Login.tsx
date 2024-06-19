"use client"

import AccountForm from "../AccountForm"
import { useAppDispatch } from "@/lib/hooks"
import { loginUser } from "@/lib/features/user/userSlice"

function Login() {
  const dispatch = useAppDispatch()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    dispatch(loginUser(data))
  }

  return <AccountForm submitHandler={handleSubmit} variant="login" />
}
export default Login

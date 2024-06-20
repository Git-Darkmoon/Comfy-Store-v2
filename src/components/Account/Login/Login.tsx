"use client"

import AccountForm from "../AccountForm"
import { useAppDispatch } from "@/lib/hooks"
import { makeUserLogin } from "@/lib/features/user/userSlice"
import { loginCredentials } from "@/utils/types"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

function Login() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      dispatch(makeUserLogin(data as loginCredentials)).unwrap()
      toast.success("Welcome back!")
      router.push("/")
    } catch (error) {
      toast.error("Login failed: " + error)
    }
  }

  return <AccountForm submitHandler={handleSubmit} variant="login" />
}
export default Login

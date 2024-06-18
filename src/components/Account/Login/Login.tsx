"use client"

import AccountForm from "../AccountForm"
import { useAppDispatch } from "@/lib/hooks"
import { loginUser } from "@/lib/features/user/userSlice"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

function Login() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      dispatch(loginUser(data))
      router.push("/")
    } catch (error) {
      toast.error(error as string)
    }
  }

  return <AccountForm submitHandler={handleSubmit} variant="login" />
}
export default Login

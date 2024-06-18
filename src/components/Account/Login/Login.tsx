"use client"

import { loginUser } from "@/services/comfy"
import AccountForm from "../AccountForm"
import AccountFormInput from "../AccountFormInput"

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  await loginUser({
    identifier: "james@gmail.com",
    password: "secret",
  })
  console.log(
    await loginUser({
      identifier: "james@gmail.com",
      password: "secret",
    })
  )
  event.currentTarget.reset()
}

function Login() {
  return <AccountForm submitHandler={handleSubmit} variant="login" />
}
export default Login

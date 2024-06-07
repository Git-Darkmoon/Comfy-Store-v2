"use client"

import AccountForm from "../AccountForm"
import AccountFormInput from "../AccountFormInput"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
}

function Login() {
  return <AccountForm submitHandler={handleSubmit} variant="login" />
}
export default Login

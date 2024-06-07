"use client"

import AccountForm from "../AccountForm"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
}

function Register() {
  return <AccountForm submitHandler={handleSubmit} variant="register" />
}
export default Register

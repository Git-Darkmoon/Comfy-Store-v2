import Link from "next/link"
import SectionTitle from "../SectionTitle"
import AccountFormInput from "./AccountFormInput"

type accountFormProps = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void
  variant: "login" | "register"
}

function AccountForm({ submitHandler, variant }: accountFormProps) {
  if (variant === "login") {
    return (
      <main className="accountFormWrapper">
        <form onSubmit={submitHandler} className="accountForm">
          <SectionTitle title="Login" subtitle="Shop your way" />
          <AccountFormInput
            key={"identifier"}
            id="identifier"
            label="email"
            type="email"
          />
          <AccountFormInput
            key={"password"}
            id="password"
            label="Password"
            type="password"
          />
          <button className="accountForm__btn">Login</button>
          <p>
            Not a member yet ?<Link href={"/register"}>Register</Link>
          </p>
        </form>
      </main>
    )
  }

  return (
    <main className="accountFormWrapper">
      <form onSubmit={submitHandler} className="accountForm">
        <SectionTitle title="Register" subtitle="From now discover luxury" />
        <AccountFormInput
          key={"username"}
          id="username"
          label="username"
          type="text"
        />
        <AccountFormInput
          key={"identifier"}
          id="identifier"
          label="identifier"
          type="identifier"
        />
        <AccountFormInput
          key={"password"}
          id="password"
          label="Password"
          type="password"
        />
        <button className="accountForm__btn">Create Account</button>
        <p>
          Already a member ?<Link href={"/login"}>Login</Link>
        </p>
      </form>
    </main>
  )
}
export default AccountForm

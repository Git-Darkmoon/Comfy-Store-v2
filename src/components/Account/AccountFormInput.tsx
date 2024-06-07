import { InputHTMLAttributes } from "react"

type accountFormInputProps = {
  type: HTMLInputElement["type"]
  id: string
  label: string
}

function AccountFormInput({ type, id, label }: accountFormInputProps) {
  return (
    <div className="accountForm__input-container">
      <input
        required
        id={id}
        type={type}
        name={id}
        className="accountForm__input"
      />
      <label className="accountForm__label" htmlFor={id}>
        {label}
      </label>
      <div className="accountForm__input-underline"></div>
    </div>
  )
}
export default AccountFormInput

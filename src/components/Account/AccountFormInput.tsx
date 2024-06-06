function AccountFormInput() {
  return (
    <div className="input-container">
      <input required id="input" type="text" />
      <label className="label" htmlFor="input">
        Name
      </label>
      <div className="underline"></div>
    </div>
  )
}
export default AccountFormInput

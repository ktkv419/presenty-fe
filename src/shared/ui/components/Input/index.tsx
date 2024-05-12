import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react"
import "./input.scss"

type TInputProps = {
  id: string
  type: HTMLInputTypeAttribute
  variant?: "outlined" | "filled" | "standard"
  fieldName?: string
  state?: "valid" | "error"
  errorMsg?: string
  value?: string
}

const Input = ({
  id,
  type,
  variant = "standard",
  value: _value = "",
  fieldName = id,
}: TInputProps) => {
  const [value, setValue] = useState(_value)

  const classNames = ["input"]
  if (variant) classNames.push(`input--${variant}`)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={classNames.join(" ")}>
      <label className="input__label" htmlFor=""></label>
      <input
        className="input__field"
        value={value}
        onChange={handleInput}
        id={id}
        name={fieldName}
        type={type}
      />
    </div>
  )
}

export default Input

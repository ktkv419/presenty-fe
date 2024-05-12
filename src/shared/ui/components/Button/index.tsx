import { ReactNode } from 'react'
import "./button.scss"

type TButtonProps = {
	type?: 'disabled' | 'error' | 'ghost'
	children: ReactNode
}

const Button = ({type, children}: TButtonProps) => {
	const classNames = ["btn"]
	if (type) classNames.push(`btn--${type}`)

	return (
		<button type="button" className={classNames.join(" ")}>{children}</button>
	)
}

export default Button
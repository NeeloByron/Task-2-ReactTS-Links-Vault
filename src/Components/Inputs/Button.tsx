import React from 'react'

type buttonProp = {
  btnText : string,
  style?: React.CSSProperties,
  onClick?: () => void,
  type?: "button" | "submit" | "reset"
}

export const Button: React.FC<buttonProp>= ({btnText, style, onClick, type = "button"}) => {
  return (
    <button type={type} style={style} onClick={onClick}>{btnText}</button>
  )
}

export default Button

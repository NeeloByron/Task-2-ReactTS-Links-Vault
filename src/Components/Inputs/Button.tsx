import React from 'react'
import style from '@/Components/Inputs/Input.module.css'

type buttonProp = {
  btnText : string,
  style?: React.CSSProperties,
  onClick?: () => void,
}

export const Button: React.FC<buttonProp>= ({btnText, style, onClick}) => {
  return (
    <button style={style} onClick={onClick}>{btnText}</button>
  )
}

export default Button

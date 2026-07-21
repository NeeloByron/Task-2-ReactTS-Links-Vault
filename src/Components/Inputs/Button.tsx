import React from 'react'
import style from '@/Components/Inputs/Input.module.css'

type buttonProp = {
  btnText : string,
  style?: React.CSSProperties,
  onClick?: () => void,
}

export const Button: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...rest}) => {
  return (
    <input className={style.btnText} {...rest} />
  )
} 

export default Button
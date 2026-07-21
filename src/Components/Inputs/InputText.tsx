import React, { type HTMLInputTypeAttribute } from 'react'
import style from '@/Components/Inputs/Input.module.css'

type InputProps = {
    value? : string | number,
    style? : React.CSSProperties,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    type? : HTMLInputTypeAttribute 
    className? : string,
    name? : string,
    label? : string,
    error? : string,
    placeholder? : string
}
  const InputTtext = React.forwardRef<HTMLInputElement, InputProps> (
    ({label, error, className, ...props }, ref) => {
        return (
            <div className={`${style['inputWrap']} ${className || ''}`}>
              {label && <label className={style['inputLabel']}>{label}</label>}
              <input className={`${style['inputField']}`}  ref={ref}  {...props} />
              {error && <span className={`${style['error']}`}>{error}</span>}
             </div>
      )
    }
  )
  
export default InputTtext
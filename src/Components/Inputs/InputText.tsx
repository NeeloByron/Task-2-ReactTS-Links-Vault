import React, { type HTMLInputTypeAttribute } from 'react'
import style from '@/Components/Inputs/Input.module.css'

type InputProps = {
    value? : string | number,
    style? : React.CSSProperties,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    ref? : React.Ref<HTMLInputElement | null>,
    type? : HTMLInputTypeAttribute 
    className? : string,
    name? : string,
    label? : string,
    error? : string
}
  const InputTtext = React.forwardRef<HTMLInputElement, InputProps> (
    (props, ref) => {
        return (
          <div className={style['']}>
            <div className={style['']}>
               <input ref={ref} {...props} />
            </div>
          </div>
        )
    }
  )
export default InputTtext



export type inputProps = {
    id? : string,
    style? : React.CSSProperties,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    ref? : React.Ref<HTMLInputElement | null>,
    type? : string
}

  const inputTtext: React.FC<inputProps> = ({id, style, onChange, ref, type}) => {
    return (
        <input ref={ref} style={style} id={id} onChange={onChange} type={type} />
    )
}

export default inputTtext
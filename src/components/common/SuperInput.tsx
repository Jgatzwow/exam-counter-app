import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import styles from './SuperInput.module.css'
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

const SuperInput: React.FC<SuperInputTextPropsType> = (

    {
        onChange,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)
    }

    const finalSpanClassName = `${styles.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? styles.errorInput : styles.superInput} ${className}` // need to fix with (?:) and s.superInput

    return (
        <>
            <input
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    )
}

export default SuperInput

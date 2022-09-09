import React from 'react';

type PropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>


export const SuperButton = (props: PropsType) => {
    const {children, ...restProps} = props
    return <button {...restProps} >{children}</button>
}
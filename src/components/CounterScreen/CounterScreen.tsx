import React from 'react';
import s from './CounterScreen.module.css'

type PropsType = {
    count: number
    threshold: number
    greeting: string
    screenToggle: boolean
}


export const CounterScreen = (props: PropsType) => {
    const {count, threshold, greeting, screenToggle} = props
    return (
        <>{
            screenToggle ? <div className={count === threshold ? s.red__counter : s.counter}>
                    {count}
                </div>
                : <div>{greeting}</div>
        }</>
    )
}
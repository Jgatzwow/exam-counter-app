import React from 'react';
import styles from './CounterScreen.module.css'

type PropsType = {
    count: number
    threshold: number
    greeting: string
    screenToggle: boolean
}


export const CounterScreen = (props: PropsType) => {
    const {count, threshold, greeting, screenToggle} = props
    const displayCount = count.toLocaleString();
    return (
        <>{
            screenToggle ? <div className={count === threshold ? styles.red__counter : styles.counter}>
                    {displayCount}
                </div>
                : <div>{greeting}</div>
        }</>
    )
}
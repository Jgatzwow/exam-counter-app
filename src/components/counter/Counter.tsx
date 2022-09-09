import React from 'react';
import s from './Counter.module.css'

type PropsType = {
    count: number
}


export const Counter = (props: PropsType) => {
    const {count} = props
    return <div className={count === 5 ? s.red__counter : s.counter}>
        {count}
    </div>
}
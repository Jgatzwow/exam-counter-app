import React, {FC} from 'react';
import {SuperButton} from '../common/SuperButton';

type PropsType = {
    setCount: (startVal: number) => void
    setThreshold: (threshold: number) => void
    maxValue: number
    startValue: number
    setStartValue: (startVal: number) => void
    setMaxValue: (maxVal: number) => void
    setError: (err: string | null) => void
    setScreenToggle: (flag: boolean) => void
    error: string | null
}


export const Settings: FC<PropsType> = (props) => {
    const {
        setCount, setThreshold, setMaxValue,
        startValue, setStartValue, maxValue,
        setError, setScreenToggle, error
    } = props


    const onMaxValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        setError(null)
        setCount(0)
        setScreenToggle(false)
    }
    const onStartValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        setCount(0)
        setError(null)
        setScreenToggle(false)
    }


    const onSetCountBtnHandler = () => {
        if (startValue === maxValue) {
            setError('Start value should not equal max value')
        } else if (startValue < 0) {
            setError('Values should not be negative integers')
        } else if (startValue > maxValue) {
            setError('Starting value should not be bigger than max value')
        } else {
            setError(null)
            setCount(startValue)
            setThreshold(maxValue)
            setScreenToggle(true)
        }
    }

    return (
        <div className={'settings__wrapper'}>
            <div className={'counter'}>
                <h2 className={'settings__title'}>max value:</h2>
                <input className={error ? 'error__input' : 'default__input'}
                       onChange={onMaxValueChangeHandler}
                       value={maxValue} type="number"/>
            </div>
            <div className={'counter'}>
                <h2 className={'settings__title'}>start value:</h2>
                <input className={error ? 'error__input' : 'default__input'}
                       onChange={onStartValueChangeHandler}
                       value={startValue} type="number"/>
            </div>
            <div className={'btn_wrapper'}>

                <SuperButton onClick={onSetCountBtnHandler} className={'default__btn'}>
                    set
                </SuperButton>
            </div>
        </div>
    )
}
import React, {FC} from 'react';
import {SuperButton} from '../common/SuperButton';
import SuperInput from '../common/SuperInput';

type PropsType = {
    setCount: (startVal: number) => void
    setThreshold: (threshold: number) => void
    maxValue: number
    startValue: number
    setStartValue: (startVal: number) => void
    setMaxValue: (maxVal: number) => void
    setError: (err: string) => void
    setScreenToggle: (flag: boolean) => void
    error: string
}


export const Settings: FC<PropsType> = (props) => {
    const {
        setCount, setThreshold, setMaxValue,
        startValue, setStartValue, maxValue,
        setError, setScreenToggle, error
    } = props


    const onMaxValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue( Math.floor(+e.currentTarget.value))
        setError('')
        setCount(0)
        setScreenToggle(false)
    }
    const onStartValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue( Math.floor(+e.currentTarget.value))
        setCount(0)
        setError('')
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
            setError('')
            setCount(startValue)
            setThreshold(maxValue)
            setScreenToggle(true)
        }
    }
    const onEnterKeyPressHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter') {
            onSetCountBtnHandler()
        }
    }

    return (
        <div className={'settings__wrapper'}>
            <div className={'counter'}>
                <h2 className={'settings__title'}>max value:</h2>
                <SuperInput type={'number'}
                            className={error ? 'error__input' : 'default__input'}
                            onChange={onMaxValueChangeHandler}
                            value={maxValue}/>
                {/*<input className={error ? 'error__input' : 'default__input'}
                       onChange={onMaxValueChangeHandler}
                       value={maxValue} type="number"/>*/}
            </div>
            <div className={'counter'}>
                <h2 className={'settings__title'}>start value:</h2>
                <SuperInput type={'number'}
                            className={error ? 'error__input' : 'default__input'}
                            onChange={onStartValueChangeHandler}
                            value={startValue}/>
                {/*<input className={error ? 'error__input' : 'default__input'}
                       onChange={onStartValueChangeHandler}
                       value={startValue} type="number"/>*/}
            </div>
            <div className={'btn_wrapper'}>

                <SuperButton onKeyDown={onEnterKeyPressHandler} onClick={onSetCountBtnHandler}
                             className={'default__btn'}>
                    set
                </SuperButton>
            </div>
        </div>
    )
}
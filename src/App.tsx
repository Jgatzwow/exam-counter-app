import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterScreen} from './components/CounterScreen/CounterScreen';
import {SuperButton} from './components/common/SuperButton';
import {Settings} from './components/Settings/Settings';
import {ErrorScreen} from './components/ErrorScreen/ErrorScren';

function App() {
    const greeting = 'Choose settings, PLease! =)'
    let initialStateValue = 0

    const [count, setCount] = useState(initialStateValue)
    const [threshold, setThreshold] = useState(initialStateValue)
    const [maxValue, setMaxValue] = useState(initialStateValue)
    const [startValue, setStartValue] = useState(initialStateValue)
    const [error, setError] = useState<string | null>(null)
    const [screenToggle, setScreenToggle] = useState<boolean>(false)


    const incrementCount = () => {
        if (count !== threshold)
            setCount(count + 1)
    }

    const resetCount = () => {
        setCount(startValue)
    }

    useEffect(() => {
        let counterScreenValAsString = localStorage.getItem('counterScreenVal')
        if (counterScreenValAsString) {
            let newCounterScreenVal = JSON.parse(counterScreenValAsString)
            setCount(newCounterScreenVal)
        }
    }, [])

    useEffect(() => {
        let screenToggleAsString = localStorage.getItem('screenToggle')
        if (screenToggleAsString) {
            let newScreenToggle = JSON.parse(screenToggleAsString)
            setScreenToggle(newScreenToggle)
        }
    }, [])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    useEffect(() => {
        let errorAsString = localStorage.getItem('error')
        if (errorAsString) {
            let newError = JSON.parse(errorAsString)
            setError(newError)
        }
    }, [])

    /*const localStorageInfo = {
        'counterScreenVal': JSON.stringify(count),
        'screenToggle': JSON.stringify(screenToggle),
        'startValue': JSON.stringify(startValue),
        'maxValue': JSON.stringify(maxValue),
        'error': JSON.stringify(error)*/

     useEffect(() => {
         localStorage.setItem('counterScreenVal', JSON.stringify(count))
         localStorage.setItem('screenToggle', JSON.stringify(screenToggle))
         localStorage.setItem('startValue', JSON.stringify(startValue))
         localStorage.setItem('maxValue', JSON.stringify(maxValue))
         localStorage.setItem('error', JSON.stringify(error))
     }, [count, startValue, maxValue, screenToggle, error])

/*    useEffect(() => {
        let appInfoAsString = localStorage.getItem('appInfo')
        if (appInfoAsString) {
            let newAppInfo = JSON.parse(appInfoAsString)
            console.log(newAppInfo)
            setCount(newAppInfo.count)
            setScreenToggle(newAppInfo.screenToggle)
            setStartValue(newAppInfo.startValue)
            setMaxValue(newAppInfo.maxValue)
            setError(newAppInfo.error)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('appInfo', JSON.stringify(localStorageInfo))
    }, [localStorageInfo])}*/

    return (


        <div className={'App__wrapper'}>
            <h1 className={'counter__title'}>Hello</h1>
            <div className="content__wrapper">
                <Settings setCount={setCount}
                          setThreshold={setThreshold}
                          maxValue={maxValue}
                          setMaxValue={setMaxValue}
                          startValue={startValue}
                          setStartValue={setStartValue}
                          error={error}
                          setError={setError}
                          setScreenToggle={setScreenToggle}
                />
            </div>
            <div className="content__wrapper">
                <div className={'counter__screen-wrapper'}>
                    {error ? <ErrorScreen error={error}/>
                        : <div className={'counter'}>
                            <CounterScreen greeting={greeting}
                                           count={count}
                                           threshold={threshold}
                                           screenToggle={screenToggle}/>
                        </div>}
                    <div className={'btn_wrapper'}>
                        <SuperButton className={'default__btn'}
                                     disabled={count === threshold || !screenToggle || !!error}
                                     onClick={incrementCount}>
                            inc
                        </SuperButton>
                        <SuperButton className={'default__btn'}
                                     disabled={count === startValue || !screenToggle || !!error}
                                     onClick={resetCount}>
                            reset
                        </SuperButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

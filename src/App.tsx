import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterScreen} from './components/CounterScreen/CounterScreen';
import {SuperButton} from './components/common/SuperButton';
import {Settings} from './components/Settings/Settings';
import {ErrorScreen} from './components/ErrorScreen/ErrorScren';

function App() {
    const greeting = 'Choose settings, Please! =)'
    let initialStateValue = 0

    const [count, setCount] = useState(initialStateValue)
    const [threshold, setThreshold] = useState(initialStateValue)
    const [maxValue, setMaxValue] = useState(initialStateValue)
    const [startValue, setStartValue] = useState(initialStateValue)
    const [error, setError] = useState<string>('')
    const [screenToggle, setScreenToggle] = useState<boolean>(false)


    console.log('count: ', count)
    console.log('threshold: ', threshold)
    console.log('maxValue: ', maxValue)
    console.log('startValue: ', startValue)
    console.log('error: ', error)
    console.log('screenToggle: ', screenToggle)


    const incrementCount = () => {
        if (count !== threshold)
            setCount(count + 1)
    }

    const resetCount = () => {
        setCount(startValue)
    }


    const localStorageInfo = {
        count: count,
        screenToggle: screenToggle,
        startValue: startValue,
        maxValue: maxValue,
        error: error,
        threshold: threshold
    }

    const localStorageHandler = () => {
        let counterData = localStorage.getItem('counterData')

        if (!counterData) {
            localStorage.setItem('counterData', JSON.stringify(localStorageInfo))
        } else {
            let parsedData = JSON.parse(counterData ? counterData : '')
            console.log('parsedData: ', parsedData)
            setStartValue(parsedData.startValue)
            setCount(parsedData.count)
            setScreenToggle(parsedData.screenToggle)
            setMaxValue(parsedData.maxValue)
            setError(parsedData.error)
            setThreshold(parsedData.threshold)
        }
    }

    useEffect(() => {
        localStorageHandler()
    }, [])

    useEffect(() => {
        localStorage.setItem('counterData', JSON.stringify(localStorageInfo))
    }, [count, startValue, maxValue, screenToggle, error, threshold])

    console.log('localStorageInfo: ', localStorageInfo)


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

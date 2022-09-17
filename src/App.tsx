import React, {useState} from 'react';
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

    /*    useEffect(() => {
            let countAsString = localStorage.getItem('counterScreenVal')
            if (countAsString) {
                let newCount = JSON.parse(countAsString)
                setCount(newCount)
            }
        }, [])

        useEffect(() => {
            localStorage.setItem('counterScreenVal', JSON.stringify(count))
        }, [count])*/


    return (
        <div className={'App__wrapper'}>

            <div className={'content__wrapper'}>
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
                <div>
                    {error ? <ErrorScreen error={error}/>
                        : <div className={'counter'}>
                            <CounterScreen greeting={greeting}
                                           count={count}
                                           threshold={threshold}
                                           screenToggle={screenToggle}/>
                        </div>}
                    <div className={'btn_wrapper'}>
                        <SuperButton className={'inc__btn'}
                                     disabled={count === threshold}
                                     onClick={incrementCount}>
                            inc
                        </SuperButton>
                        <SuperButton className={'inc__btn'}
                                     disabled={count === startValue}
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

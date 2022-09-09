import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {SuperButton} from './components/common/SuperButton';

function App() {

    const [count, setCount] = useState<number>(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={'App__wrapper'}>
            <div className="App">
                <div className={'counter'}>
                    <Counter count={count}/>
                </div>
                <div className={'btn_wrapper'}>
                    <SuperButton className={'inc__btn'}
                                 disabled={count === 5}
                                 onClick={incrementCount}>
                        inc
                    </SuperButton>
                    <SuperButton className={'inc__btn'}
                                 disabled={count === 0}
                                 onClick={resetCount}>
                        reset
                    </SuperButton>
                </div>
            </div>
        </div>
    );
}

export default App;

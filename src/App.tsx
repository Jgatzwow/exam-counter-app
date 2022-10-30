import React from "react";
import "./App.css";
import { CounterScreen } from "./components/CounterScreen/CounterScreen";
import { SuperButton } from "./components/common/SuperButton";
import { Settings } from "./components/Settings/Settings";
import { ErrorScreen } from "./components/ErrorScreen/ErrorScren";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCountAC,
  InitialStateType,
  onCountChangeAC,
  onMaxValueChangeAC,
  onScreenToggleAC,
  onSetErrorAC,
  onStartValueChangeAC,
  onThresholdChangeAC,
  resetCountAC,
} from "./reduxstate/counterReducer";
import { StateType } from "./reduxstate/store";

export const App = () => {
  const counter = useSelector<StateType, InitialStateType>(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  debugger;
  const {
    greeting,
    count,
    threshold,
    maxValue,
    startValue,
    error,
    screenToggle,
  } = counter.data;
  const incrementCountHandler = () => {
    dispatch(incrementCountAC());
  };

  const resetCountHandler = () => {
    dispatch(resetCountAC());
  };

  const onCountChangeHandler = (newCount: number) => {
    dispatch(onCountChangeAC(newCount));
  };
  const onThresholdChangeHandler = (threshold: number) => {
    dispatch(onThresholdChangeAC(threshold));
  };
  const onMaxValChangeHandler = (maxVal: number) => {
    dispatch(onMaxValueChangeAC(maxVal));
  };
  const onStartValChangeHandler = (startVal: number) => {
    dispatch(onStartValueChangeAC(startVal));
  };
  const onSetErrorHandler = (newError: string) => {
    dispatch(onSetErrorAC(newError));
  };
  const onScreenToggleHandler = (flag: boolean) => {
    dispatch(onScreenToggleAC(flag));
  };

  return (
    <div className={"App__wrapper"}>
      <h1 className={"counter__title"}>Hello this is my Counter</h1>
      <div className="content__wrapper">
        <Settings
          setCount={onCountChangeHandler}
          setThreshold={onThresholdChangeHandler}
          maxValue={maxValue}
          setMaxValue={onMaxValChangeHandler}
          startValue={startValue}
          setStartValue={onStartValChangeHandler}
          error={error}
          setError={onSetErrorHandler}
          setScreenToggle={onScreenToggleHandler}
        />
      </div>
      <div className="content__wrapper">
        <div className={"counter__screen-wrapper"}>
          {error ? (
            <ErrorScreen error={error} />
          ) : (
            <div className={"counter"}>
              <CounterScreen
                greeting={greeting}
                count={count}
                threshold={threshold}
                screenToggle={screenToggle}
              />
            </div>
          )}
          <div className={"btn_wrapper"}>
            <SuperButton
              disabled={count === threshold || !screenToggle || !!error}
              onClick={incrementCountHandler}
            >
              inc
            </SuperButton>
            <SuperButton
              disabled={count === startValue || !screenToggle || !!error}
              onClick={resetCountHandler}
            >
              reset
            </SuperButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

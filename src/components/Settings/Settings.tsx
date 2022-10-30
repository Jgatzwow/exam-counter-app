import React, { FC } from "react";
import { SuperButton } from "../common/SuperButton";
import SuperInput from "../common/SuperInput";

type PropsType = {
  setCount: (startVal: number) => void;
  setThreshold: (threshold: number) => void;
  maxValue: number;
  startValue: number;
  setStartValue: (startVal: number) => void;
  setMaxValue: (maxVal: number) => void;
  setError: (err: string) => void;
  setScreenToggle: (flag: boolean) => void;
  error: string;
};

export const Settings: FC<PropsType> = (props) => {
  const {
    setCount,
    setThreshold,
    setMaxValue,
    startValue,
    setStartValue,
    maxValue,
    setError,
    setScreenToggle,
    error,
  } = props;

  const resetDataHandler = () => {
    setError("");
    setCount(0);
    setScreenToggle(false);
  };

  const onMaxValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxValInputsValue = Math.floor(e.currentTarget.valueAsNumber);
    setMaxValue(maxValInputsValue);
    if (startValue === maxValInputsValue) {
      setError("Start value should not equal max value");
      return;
    }
    if (maxValInputsValue < 0) {
      setError("Values should not be negative integers");
      return;
    }
    if (startValue > maxValInputsValue) {
      setError("Starting value should not be bigger than max value");
      return;
    }
    resetDataHandler();
  };
  const onStartValueChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const startValInputsValue = Math.floor(e.currentTarget.valueAsNumber);
    setStartValue(startValInputsValue);
    if (startValInputsValue === maxValue) {
      setError("Start value should not equal max value");
      return;
    }
    if (startValInputsValue < 0) {
      setError("Values should not be negative integers");
      return;
    }
    if (startValInputsValue > maxValue) {
      setError("Starting value should not be bigger than max value");
      return;
    }
    resetDataHandler();
  };

  const onSetCountBtnHandler = () => {
    if (startValue === maxValue) {
      setError("Start value should not equal max value");
      return;
    }
    if (startValue < 0) {
      setError("Values should not be negative integers");
      return;
    }
    if (startValue > maxValue) {
      setError("Starting value should not be bigger than max value");
      return;
    }
    setError("");
    setCount(startValue);
    setThreshold(maxValue);
    setScreenToggle(true);
  };
  const onEnterKeyPressHandler = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (e.key === "Enter") {
      onSetCountBtnHandler();
    }
  };

  return (
    <div className={"settings__wrapper"}>
      <div className={"counter"}>
        <h2 className={"settings__title"}>max value:</h2>
        <SuperInput
          type={"number"}
          error={!!error}
          onChange={onMaxValueChangeHandler}
          value={maxValue.toString()}
        />
      </div>
      <div className={"counter"}>
        <h2 className={"settings__title"}>start value:</h2>
        <SuperInput
          error={!!error}
          type={"number"}
          onChange={onStartValueChangeHandler}
          value={startValue.toString()}
        />
      </div>
      <div className={"btn_wrapper"}>
        <SuperButton
          disabled={!!error}
          onKeyDown={onEnterKeyPressHandler}
          onClick={onSetCountBtnHandler}
        >
          set
        </SuperButton>
      </div>
    </div>
  );
};

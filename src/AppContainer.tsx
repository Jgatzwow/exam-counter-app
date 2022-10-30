import App from "./App";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateType } from "./reduxstate/store";
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

type MapStateToPropsType = {
  appState: InitialStateType;
};
type MapDispatchToPropsType = {
  updateMaxValInput: (newMaxVal: number) => void;
  updateCount: (newCount: number) => void;
  incrementCount: () => void;
  resetCount: () => void;
  updateThreshold: (newThreshold: number) => void;
  updateStartValue: (newStartVal: number) => void;
  updateError: (newError: string) => void;
  switchScreenToggle: (flag: boolean) => void;
};
export type AppPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    appState: state.counter,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateMaxValInput: (newMaxVal: number) => {
      dispatch(onMaxValueChangeAC(newMaxVal));
    },
    updateCount: (newCount: number) => {
      dispatch(onCountChangeAC(newCount));
    },
    incrementCount: () => {
      dispatch(incrementCountAC());
    },
    resetCount: () => {
      dispatch(resetCountAC());
    },
    switchScreenToggle: (flag: boolean) => {
      dispatch(onScreenToggleAC(flag));
    },
    updateError: (newError) => {
      dispatch(onSetErrorAC(newError));
    },
    updateStartValue: (newStartVal: number) => {
      dispatch(onStartValueChangeAC(newStartVal));
    },
    updateThreshold: (newThreshold: number) => {
      dispatch(onThresholdChangeAC(newThreshold));
    },
  };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

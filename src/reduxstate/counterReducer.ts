const initialState = {
  data: {
    greeting: "Choose settings, Please! =)",
    count: 0,
    threshold: 0,
    maxValue: 5,
    startValue: 0,
    error: "",
    screenToggle: false,
  },
};
export type InitialStateType = typeof initialState;
export const counterReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "INCREMENT-COUNT":
      return state.data.count !== state.data.threshold
        ? { ...state, data: { ...state.data, count: state.data.count + 1 } }
        : state.data.count;
    case "RESET-COUNT":
      return {
        ...state,
        data: { ...state.data, count: state.data.startValue },
      };
    case "CHANGE-COUNT":
      return {
        ...state,
        data: { ...state.data, count: action.payload.newCount },
      };
    case "CHANGE-THRESHOLD":
      return {
        ...state,
        data: { ...state.data, threshold: action.payload.threshold },
      };
    case "CHANGE-MAX-VAL": {
      console.log("check", state);
      return {
        ...state,
        data: { ...state.data, maxValue: action.payload.newMaxVal },
      };
    }
    case "CHANGE-START-VAL":
      return {
        ...state,
        data: { ...state.data, startValue: action.payload.newStartVal },
      };
    case "ON-SET-ERROR":
      return {
        ...state,
        data: { ...state.data, error: action.payload.newError },
      };
    case "ON-SCREEN-TOGGLE":
      return {
        ...state,
        data: { ...state.data, screenToggle: action.payload.flag },
      };
    default:
      return state;
  }
};
export type ActionsType =
  | incrementCountACType
  | resetCountACType
  | onCountChangeACType
  | onThresholdChangeACType
  | onMaxValueChangeACType
  | onStartValueChangeACType
  | onSetErrorACType
  | onScreenToggleACType;

type incrementCountACType = ReturnType<typeof incrementCountAC>;
type resetCountACType = ReturnType<typeof resetCountAC>;
type onCountChangeACType = ReturnType<typeof onCountChangeAC>;
type onThresholdChangeACType = ReturnType<typeof onThresholdChangeAC>;
type onMaxValueChangeACType = ReturnType<typeof onMaxValueChangeAC>;
type onStartValueChangeACType = ReturnType<typeof onStartValueChangeAC>;
type onSetErrorACType = ReturnType<typeof onSetErrorAC>;
type onScreenToggleACType = ReturnType<typeof onScreenToggleAC>;
export const incrementCountAC = () => {
  return {
    type: "INCREMENT-COUNT",
  } as const;
};
export const resetCountAC = () => {
  return {
    type: "RESET-COUNT",
  } as const;
};

export const onCountChangeAC = (newCount: number) => {
  return {
    type: "CHANGE-COUNT",
    payload: {
      newCount,
    },
  } as const;
};
export const onThresholdChangeAC = (threshold: number) => {
  return {
    type: "CHANGE-THRESHOLD",
    payload: {
      threshold,
    },
  } as const;
};

export const onMaxValueChangeAC = (newMaxVal: number) => {
  return {
    type: "CHANGE-MAX-VAL",
    payload: {
      newMaxVal,
    },
  } as const;
};
export const onStartValueChangeAC = (newStartVal: number) => {
  return {
    type: "CHANGE-START-VAL",
    payload: {
      newStartVal,
    },
  } as const;
};

export const onSetErrorAC = (newError: string) => {
  return {
    type: "ON-SET-ERROR",
    payload: {
      newError,
    },
  } as const;
};
export const onScreenToggleAC = (flag: boolean) => {
  return {
    type: "ON-SCREEN-TOGGLE",
    payload: {
      flag,
    },
  } as const;
};

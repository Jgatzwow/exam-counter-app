import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { loadState, saveState } from "./localStorage";

const throttle = require("lodash.throttle");

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedState = loadState();

export type StateType = ReturnType<typeof rootReducer>;
export const store = legacy_createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      counter: store.getState().counter,
    });
  }, 1000)
);

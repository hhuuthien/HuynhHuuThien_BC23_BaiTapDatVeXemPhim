import { combineReducers, createStore } from "redux";
import { datVeXemPhimReducer } from "./datVeXemPhimReducer";

const DEFAULT_STATE = 1;

const rootReducer = combineReducers({
  datVeXemPhimReducer,
});

export const store = createStore(rootReducer);

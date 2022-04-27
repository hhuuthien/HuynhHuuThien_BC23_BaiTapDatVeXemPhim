import { combineReducers, createStore } from "redux";
import { datVeXemPhimReducer } from "./datVeXemPhimReducer";

const rootReducer = combineReducers({
  datVeXemPhimReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

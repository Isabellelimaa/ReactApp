import { combineReducers } from "redux";
import { AppReducer } from "./AppReducers";

const appReducer = combineReducers({
  AppReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/auth";
import todoReducer from "../reducers/todo";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;

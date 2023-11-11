import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import todoReducer from "../reducers/todoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;

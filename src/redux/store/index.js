import { createStore, combineReducers } from "redux";
import authReducer from "@/redux/reducers/auth";
import todoReducer from "@/redux/reducers/todo";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;

import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/AuthReducer';
import todoReducer from '../reducers/TodoReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
  });
  
  const store = createStore(rootReducer);
  
  export default store;
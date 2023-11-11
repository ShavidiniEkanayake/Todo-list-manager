import { UPDATE_TODO_STATUS } from '../actions/todoAction';

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  const { type, payload } = action; 

  switch (type) {
    case 'FETCH_TODOS':
      return { ...state, todos: payload };
      
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case UPDATE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, status: 'In Progress' }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default TodoReducer;

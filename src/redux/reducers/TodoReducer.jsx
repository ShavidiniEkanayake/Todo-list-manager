const initialState = {
    todos: [],
  };
  
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'UPDATE_TODO_STATUS':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, status: action.payload.status } : todo
          ),
        };
      default:
        return state;
    }
  };
  
  export default TodoReducer;
  
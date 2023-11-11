const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_TODOS":
      return { ...state, todos: payload };

    case "ADD_TODO":
      return {
        ...state,
        todos: [payload, ...state.todos],
      };

    case "UPDATE_STATUS":
      const { id, status } = payload;
      return {
        ...state,
        todos: [
          {
            ...state.todos.find((todo) => todo.id === id),
            status,
          },
          ...state.todos.filter((todo) => todo.id !== id),
        ],
      };

    case "UPDATE_TASK":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, ...payload.updatedTask } : todo,
        ),
      };

    default:
      return state;
  }
};

export default TodoReducer;

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const updateTodoStatus = (id, status) => ({
    type: 'UPDATE_TODO_STATUS',
    payload: { id, status },
  });
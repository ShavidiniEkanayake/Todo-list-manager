//add todo data
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

//update todo data
export const updateStatus = (id, status) => ({
  type: 'UPDATE_STATUS',
  payload: { id, status },
});

//tetch todo data
export const fetchTodos = (todos) => ({
  type: 'FETCH_TODOS',
  playload: todos
});

//update todo to inprogress
export const updateTodoStatus = (id,status) => ({
  type: 'UPDATE_TODO_STATUS',
  payload: { id, status },
});
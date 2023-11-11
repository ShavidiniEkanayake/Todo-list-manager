//add todo data
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

//update task
export const updateTask = (id, updatedTask) => ({
  type: "UPDATE_TASK",
  payload: { id, updatedTask },
});

//tetch todo data
export const fetchTodos = (todos) => ({
  type: "FETCH_TODOS",
  playload: todos,
});

//update todo to inprogress
export const updateStatus = (id, status) => ({
  type: "UPDATE_STATUS",
  payload: { id, status },
});

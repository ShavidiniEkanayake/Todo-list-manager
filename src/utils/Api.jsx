import { users } from './data';
import { todos } from './data';

//login api
export const loginApi = (credentials) => {
  const user = users.find(
    (u) =>
      u.username.trim() === credentials.username.trim() &&
      u.password.trim() === credentials.password.trim()
  );

  console.log('Users:', users);

  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user);
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
};

//fetch data api
export const getTodos = () => {
  return Promise.resolve(todos);
};

//add data api
export const addTodoApi = (newTodo) => {
  const id = todos.length + 1;
  const todo = { ...newTodo, id, status: 'Todo' };
  todos.push(todo);
  return Promise.resolve(todo);
};

//update data api
export const updateTodoStatusApi = (id, status) => {
  const updatedTodo = todos.find((todo) => todo.id === id);
  if (updatedTodo) {
    updatedTodo.status = status;
  }
  return Promise.resolve(updatedTodo);
}
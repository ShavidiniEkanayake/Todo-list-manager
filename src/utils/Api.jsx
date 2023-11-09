import { users } from './Data';
import { todos } from './Data';

export const loginApi = (credentials) => {
  const user = users.find((u) => u.username === credentials.username && u.password === credentials.password);
  console.log('Users:', users);
  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user);
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
};

export const getTodos = () => {
    console.log('Fetching todos...');
    return Promise.resolve(todos);
  };

export const updateTodoStatusApi = (id, status) => {
  const updatedTodo = todos.find((todo) => todo.id === id);
  if (updatedTodo) {
    updatedTodo.status = status;
  }
  return Promise.resolve(updatedTodo);
};
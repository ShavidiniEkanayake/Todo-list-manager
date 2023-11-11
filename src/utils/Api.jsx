import { users } from './data';
import { todos } from './data';

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

export const getTodos = () => {
    return Promise.resolve(todos);
  };

export const updateTodoStatusApi = (id, status) => {
  const updatedTodo = todos.find((todo) => todo.id === id);
  if (updatedTodo) {
    updatedTodo.status = status;
  }
  return Promise.resolve(updatedTodo);
}
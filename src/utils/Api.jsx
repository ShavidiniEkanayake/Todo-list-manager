import { users } from './mockData';

export const loginApi = (credentials) => {
  // Simulate an API call
  const user = users.find((u) => u.username === credentials.username && u.password === credentials.password);

  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user);
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
};
import { users } from "@/__mocks__";

/**
 *
 * @param {object} credentials - username and password
 * @returns user
 */
export const login = (credentials) => {
  const user = users.find(
    (u) =>
      u.username.trim() === credentials.username.trim() &&
      u.password.trim() === credentials.password.trim(),
  );

  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user);
    } else {
      reject(new Error("Invalid credentials"));
    }
  });
};

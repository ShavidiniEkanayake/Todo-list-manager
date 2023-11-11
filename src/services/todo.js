import { todos } from "@/__mocks__";

/**
 *
 * @returns {object[]} todos - array of todos
 */
export const getTodos = () => {
  return Promise.resolve(todos);
};

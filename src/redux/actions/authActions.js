//login action
export const login = (credentials) => {
  return {
    type: 'LOGIN',
    payload: credentials,
  };
};

//log out action
export const logout = () => ({
  type: 'LOGOUT',
});

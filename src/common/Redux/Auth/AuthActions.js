import { AUTH_LOGIN, AUTH_LOGOUT } from "./AuthTypes";
export const updateAuthLogin = (token) => {
  return {
    type: AUTH_LOGIN,
    payload: token
  };
};
export const performLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

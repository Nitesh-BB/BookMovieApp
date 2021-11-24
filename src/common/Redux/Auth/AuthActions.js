import { AUTH_LOGIN, AUTH_LOGOUT } from "./AuthTypes";
export const updateAuthLogin = () => {
  return {
    type: AUTH_LOGIN,
  };
};
export const performLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

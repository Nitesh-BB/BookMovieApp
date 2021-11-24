import { AUTH_LOGIN, AUTH_LOGOUT } from "./AuthTypes";

const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        isLoggedIn: true,
      };
    case AUTH_LOGOUT:
      return {
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
export default reducer;

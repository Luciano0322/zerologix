import { LOGIN_FAIL, LOGIN_SUCCESS } from "../action/authType";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user };
const authReducer = (auth = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...auth,
        isLoggedIn: true,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...auth,
        isLoggedIn: false,
      }
    default:
      return auth;
  }
};

export default authReducer;
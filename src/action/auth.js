import AuthService from "../services/AuthService";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./authType";

export const logIn = (loginData) => async (dispatch) => {
  try {
    const res = await AuthService.login(loginData).then(res => {
      console.log(res.data)
      localStorage.setItem('zeroLogixUser', JSON.stringify(res.data))
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
      payload: err
    });
    return Promise.reject(err);
  }
};
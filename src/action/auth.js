import AuthService from "../services/AuthService";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./authType";

export const logIn = (loginData) => async (dispatch) => {
  try {
    const res = await AuthService.login(loginData).then(res => {
      console.log(res.data);
      if(res.data && res.data.token && res.data.user) {
        localStorage.setItem('zeroLogixUser', JSON.stringify(res.data))
      }
      return res;
    })
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
      payload: err
    });
    return Promise.reject(err);
  }
};

export const logout = (token) => async (dispatch) => {
  try {
    const res = await AuthService.logout(token)
    dispatch({
      type: LOGOUT,
      payload: res.data
    })
    return Promise.resolve(res.data)
  } catch (err) {
    console.log(err);
    return Promise.reject(err)
  }
}
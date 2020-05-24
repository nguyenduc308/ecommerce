import * as types from "../contants/actionsType";
import callApi from "../utils/callApi";
import PATHS from "../contants/paths";
// Đăng ký
export const register = (data) => async (dispatch) => {
  try {
    const res = await callApi().post(PATHS.SIGNUP, data);
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("register fail", error.message);
  }
};

// Đăng nhập
export const login = (data) => async (dispatch) => {
  try {
    const res = await callApi().post(PATHS.SIGNIN, data);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("login fail", error.message);
  }
};

//Logout
// export const logout = () => {
//   dispatch({
//     type: LOGOUT,
//   });
// };

// User
export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

// Loading
export const showLoading = () => ({
  type: types.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: types.HIDE_LOADING,
});

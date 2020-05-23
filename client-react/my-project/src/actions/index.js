import * as types from "../contants/actionsType";
import callApi from "../utils/callApi";

export const register = (data) => async (dispatch) => {
  try {
    return await callApi()
      .post("/register", data)
      .then((res) => {
        console.log("register done", res.data);
      });
  } catch (error) {
    console.log("register fail", error.message);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await callApi().post("/login", data);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("register fail", error.message);
  }
};

//Logout
// export const logout = () => {
//   dispatch({
//     type: LOGOUT,
//   });
// };

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

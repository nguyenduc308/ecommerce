import * as types from "../contants/actionsType";
import callApi from "../utils/callApi";
import PATHS from "../contants/paths";
import storage from "../helpers/storage";
// Đăng ký
export const register = (data) => async (dispatch) => {
  try {
    const res = await callApi().post(`auth/${PATHS.SIGNUP}`, data);
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
  const res = await callApi()
    .post(`auth/${PATHS.SIGNIN}`, data)
    // dispatch({
    //   type: types.LOGIN_SUCCESS,
    //   payload: res.data,
    // });
    .then(({ data }) => {
      console.log(data);
      if (data.error && data.status === 500) {
        return dispatch(loginFail(data.error[0]));
      } else {
        storage.setToken(data.token);
        return dispatch(loginSuccess(data.token));
      }
    })
    .catch((err) => {
      return dispatch(loginFail(err.message));
    });
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

export const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: token,
});

export const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const fetchCategorys = () => async (dispatch) => {
  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzY4OGM2MjgwNDFjMWQ3Y2FkZjBlMSIsInVzZXJUeXBlIjoxMDAwLCJpYXQiOjE1OTA1OTk5MTksImV4cCI6MTk1MDU5OTkxOX0.IfKIi8bIicLh4aK_4P9H4hAe66sag296s6qXLUmQm8U";
  const res = await callApi().get("/categories/", {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  dispatch({
    type: types.FETCH_CATEGORYS,
    payload: res.data,
  });
};
export const createCategory = (data) => async (dispatch) => {
  // var config = {
  //   headers: { authorization: token },
  // };
  // const config = (callApi().defaults.headers.common["Authorization"] = token);
  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzY4OGM2MjgwNDFjMWQ3Y2FkZjBlMSIsInVzZXJUeXBlIjoxMDAwLCJpYXQiOjE1OTA1OTk5MTksImV4cCI6MTk1MDU5OTkxOX0.IfKIi8bIicLh4aK_4P9H4hAe66sag296s6qXLUmQm8U";
  const res = await callApi().post("/categories/", data, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  await dispatch({
    type: types.ADD_CATEGORY,
    payload: res.data,
  });
};
// export const deleteCategory = (slug) => async (dispatch) => {
//   var token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzY4OGM2MjgwNDFjMWQ3Y2FkZjBlMSIsInVzZXJUeXBlIjoxMDAwLCJpYXQiOjE1OTA1OTk5MTksImV4cCI6MTk1MDU5OTkxOX0.IfKIi8bIicLh4aK_4P9H4hAe66sag296s6qXLUmQm8U";
//   const res = await callApi().delete(`/categories/:${slug}`, {
//     headers: {
//       Authorization: token,
//       "Content-Type": "application/json",
//     },
//   });

//   await dispatch({
//     type: types.DELETE_CATEGORY,
//     payload: slug,
//   });
// };

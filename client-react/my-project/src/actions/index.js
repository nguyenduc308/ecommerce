// import * as types from "../contants/actionsType";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const userSignUpForm = (userData) => (dispatch) => {
  return axios.post("http://localhost:8000/signup", userData);
  // .then((res) => {
  // //   history.push("/");
  // })
  // .catch((err) => {
  //   console.log("error", err.message);
  // });
};

// export const loadUsers = () => dispatch => {
//     dispatch({ type: LOAD_USERS_LOADING });
//     Api.getUsers()
//         .then(response => response.json())
//         .then(
//             data => dispatch({ type: LOAD_USERS_SUCCESS, data }),
//             error => dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
//         )
//  };

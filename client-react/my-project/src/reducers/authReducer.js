import * as types from "../contants/actionsType";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  currentUser: null,
  loading: true,
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
  }
};

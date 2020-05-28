import * as types from "../contants/actionsType";
import storage from "../helpers/storage";
const initialState = {
  token: storage.getToken() || null,
  isAuthenticated: false,
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case types.LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

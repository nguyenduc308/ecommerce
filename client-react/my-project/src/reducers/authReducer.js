import * as types from "../contants/actionsType";
const initialState = {
  isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;

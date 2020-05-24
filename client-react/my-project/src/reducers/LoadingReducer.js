import * as types from "../contants/actionsType";
const initState = {
  isLoading: false,
};

const LoadingReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return { ...state, isLoading: true };
    case types.HIDE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default LoadingReducer;

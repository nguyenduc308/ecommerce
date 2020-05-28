import * as types from "../contants/actionsType";
const initialState = {
  category: [],
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORYS:
      return action.payload;
    case types.ADD_CATEGORY:
      return [...state, action.payload];

    case types.DELETE_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoryReducer;

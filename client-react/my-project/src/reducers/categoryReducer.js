import * as types from "../contants/actionsType";
const initialState = {
  category: [],
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORYS:
      return { ...state, category: action.payload };
    case types.FETCH_CATEGORY:
      // console.log(action.payload.category.name);
      return { ...state, category: action.payload };
    case types.ADD_CATEGORY:
      console.log(action.payload.category.slug);
      let indexs = state.category.categories.findIndex(
        (category) => category.slug === action.payload.category.slug
      );
      if (indexs === -1) {
        return {
          ...state,
          category: [...state.category.categories, action.payload.category],
        };
      }
    case types.EDIT_CATEGORY:
      return {
        ...state,
        [action.payload.category.slug]: action.payload,
      };
    case types.DELETE_CATEGORY:
      console.log(state);
      console.log({ ...state });
      let index = state.category.categories.findIndex(
        (category) => category.slug === action.payload
      );
      console.log(index);
      let newArr = [...state.category.categories];
      console.log(newArr);
      if (index > -1) {
        newArr.splice(index, 1);
        console.log(newArr);
      }
      return {
        ...state,
        category: [...state.category.categories, newArr],
      };
    // return {
    //   ...state,
    //   category: state.category.categories.filter(
    //     (category) => category.slug !== action.payload
    //   ),
    // };
    default:
      return state;
  }
};

export default categoryReducer;

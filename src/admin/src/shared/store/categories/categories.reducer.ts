import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from "./contants";

const initialState = {
    list: [],
    error: null
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS: 
            return {...state, list: action.payload};
        case GET_CATEGORIES_FAIL:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

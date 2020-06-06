import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from "./contants";
import { fromJS } from 'immutable'
const initialState = fromJS({
    list: [],
    error: null
})

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS: 
            return state.set('list', fromJS(action.payload));
        case GET_CATEGORIES_FAIL:
            return state.set('error', fromJS(action.payload));
        default:
            return state;
    }
}

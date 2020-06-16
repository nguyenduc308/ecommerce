import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL, DELETE_CATEGORY, CREATE_CATEGORY } from "./constants";
import { fromJS } from 'immutable';

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
        case DELETE_CATEGORY:
            return state.set('list', state.get('list').filter((o:any) => o.get('slug') !== action.payload));
        case CREATE_CATEGORY:
            return state.set('list', fromJS(state.get('list').push(action.payload)))
        default:
            return state;
    }
}

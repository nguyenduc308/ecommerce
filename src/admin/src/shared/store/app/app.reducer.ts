import { SHOW_LOADING, HIDE_LOADING } from "./constants";
import { fromJS } from "immutable";

const initialState = fromJS({
    loading: false
})

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return state.set('loading', true)
        case HIDE_LOADING:
            return state.set('loading', false)
        default:
            return state;
    }
}
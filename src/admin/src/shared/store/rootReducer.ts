import { combineReducers } from "redux";
import categories from './reducers/category'

const rootReducer = combineReducers({
    categories
})

export default rootReducer;
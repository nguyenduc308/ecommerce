import { combineReducers } from "redux";
import categories from './categories/categories.reducer'

const rootReducer = combineReducers({
    categories
})

export default rootReducer;
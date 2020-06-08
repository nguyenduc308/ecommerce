import { combineReducers } from "redux";
import categories from './categories/categories.reducer';
import auth from './auth/auth.reducer';

const rootReducer = combineReducers({
    categories,
    auth
})

export default rootReducer;
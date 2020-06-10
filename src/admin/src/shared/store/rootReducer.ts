import { combineReducers } from "redux";
import categories from './categories/categories.reducer';
import auth from './auth/auth.reducer';
import app from './app/app.reducer';

const rootReducer = combineReducers({
    categories,
    auth, 
    app
})

export default rootReducer;
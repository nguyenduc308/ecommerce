import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import LoadingReducer from "../reducers/LoadingReducer";
import authReducer from "../reducers/authReducer";
import categoryReducer from "../reducers/categoryReducer";
const rootReducer = combineReducers({
  user: userReducer,
  loading: LoadingReducer,
  auth: authReducer,
  category: categoryReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import LoadingReducer from "../reducers/LoadingReducer";
import authReducer from "../reducers/authReducer";
const rootReducer = combineReducers({
  user: userReducer,
  loading: LoadingReducer,
  auth: authReducer,
});

export default rootReducer;

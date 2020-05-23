import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import LoadingReducer from "../reducers/LoadingReducer";
const rootReducer = combineReducers({
  user: userReducer,
  loading: LoadingReducer,
});

export default rootReducer;

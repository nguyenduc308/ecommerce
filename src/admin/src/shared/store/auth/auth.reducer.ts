import { LOGIN_SUCCESS, AUTO_LOGIN, AUTO_LOGOUT, LOGOUT } from "./constants";
import { storage } from "../../services/localstorage-service";

const initialState = {
    isAuthenticated: true,
    token: storage.token,
    currentUser: null
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTO_LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTO_LOGOUT: 
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
}

import { LOGIN_SUCCESS, AUTO_LOGIN, AUTO_LOGOUT } from "./constants";
import { fromJS } from 'immutable';
import { storage } from "../../services/localstorage-service";

const initialState = fromJS({
    isAuthenticated: false,
    token: storage.token,
    currentUser: null
})

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
        default:
            return state;
    }
}

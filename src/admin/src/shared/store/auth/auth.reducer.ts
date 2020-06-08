import { LOGIN_SUCCESS, AUTO_LOGIN, AUTO_LOGOUT } from "./contansts";
import { fromJS } from 'immutable';
import localstorageService from "shared/helpers/localstorage-service/localstorage.service";

const initialState = fromJS({
    isAuthenticated: false,
    token: localstorageService.token,
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

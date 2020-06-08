import { LOGIN_SUCCESS } from "./contansts";
import { fromJS } from 'immutable';
import { localstorage_key } from "config";
import localstorageService from "shared/helpers/localstorage-service/localstorage.service";

const data = JSON.parse(localStorage.getItem(localstorage_key) || "{}")

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
        default:
            return state;
    }
}

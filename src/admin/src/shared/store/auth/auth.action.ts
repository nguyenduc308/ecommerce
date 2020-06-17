import { httpAxios } from "../../services/axios-service";
import { Dispatch } from "redux";
import { LOGIN_SUCCESS, AUTO_LOGIN, AUTO_LOGOUT, LOGOUT } from "./constants";
import { storage } from "../../services/localstorage-service";

export const fetchLogin = (user: {email: string, password: string}):  ThunkResult<Promise<boolean>> => async (dispatch: Dispatch) => {
    try {
        const res = await httpAxios.post('/auth/login', { email: user.email, password: user.password });
        storage.setData(res);
        dispatch(loginSuccess(res));
        return Promise.resolve(true)
    }
    catch (err) {
        return Promise.reject(false);
    }
}

const loginSuccess = (data: any): Action => ({
    type: LOGIN_SUCCESS,
    payload: data
})

export const logout = (): Action =>  ({
    type: LOGOUT
})

export const autoLogin = (): Action => ({
    type: AUTO_LOGIN 
})
export const autoLogout = (): Action => ({
    type: AUTO_LOGOUT 
})
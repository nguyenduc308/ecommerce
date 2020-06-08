import { httpAxios } from "shared/helpers/axios-service";
import { Dispatch } from "redux";
import { LOGIN_SUCCESS } from "./contansts";

export const fetchLogin = (user: {email: string, password: string}) => async (dispatch: Dispatch) => {
    try {
        const res = await httpAxios.post('/auth/login', { email: user.email, password: user.password });
        return dispatch(loginSuccess(res.data))
    }
    catch (err) {
        return await Promise.reject(false);
    }
}

const loginSuccess = (data: any): Action => ({
    type: LOGIN_SUCCESS,
    payload: data
})
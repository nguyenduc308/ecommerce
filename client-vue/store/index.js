import Vuex from "vuex";
import login from "./modules/login";
import home from "./modules/home";


import {getCookie} from '../helpers/dataHelper';

export default function() {
    return new Vuex.Store({
        state: {},
        mutations: {},
        actions: {
            nuxtServerInit({state}, {req}) { 
                state.login.userAuth = null;
                if (req.headers.cookie) {
                    let userAuth = getCookie('userAuth', req.headers.cookie);
                    if (userAuth) { 
                        userAuth = JSON.parse(userAuth);
                        let dieTime = 2;
                        let now = new Date(userAuth.user.createdAt)
                        let attDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + dieTime);                        
                        if (userAuth && userAuth.token && userAuth.user.createdAt && attDate >= new Date()){
                            state.login.userAuth = userAuth;
                        }
                    }
                }
            }
        },
        modules: {
            login,home
        }
    })
}
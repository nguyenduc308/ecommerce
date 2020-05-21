import Vuex from "vuex";
import login from "./modules/login"

export default function() {
    return new Vuex.Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {
            login,
        }
    })
}
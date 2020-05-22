import Vue from 'vue'
import VueX from 'vuex'
import { stat } from 'fs'
Vue.use(VueX)
export const store  = new VueX.Store({
    state: {
        token:'',
        currentUser : {}
    },
    getters: {

    },
    mutations: {
        SET_TOKEN (state , token){
            state.token = token
        },
        SET_CURRENT_USER (state, user){
            state.currentUser = user
        } 
    },
    actions: {
        SET_TOKEN({commit} , token) {
            commit('SET_TOKEN', token )
        },
        SET_CURRENT_USER({commit} , user) {
            commit('SET_CURRENT_USER' , user)
        }
    }
})
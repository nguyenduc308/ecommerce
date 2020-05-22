import Vue from 'vue'
import VueX from 'vuex'
import axios from 'axios'

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
        },
        LOGIN(state, payload){
            
        }
    },
    actions: {
        SET_TOKEN({commit} , token) {
            commit('SET_TOKEN', token )
        },
        SET_CURRENT_USER({commit} , user) {
            commit('SET_CURRENT_USER' , user)
        },
        LOGIN({commit} , payload){
            return Promise((resolve , rejects) =>{
                setTimeout(() =>{
                    resolve(true)
                },1000)
            })
        }
    }
})
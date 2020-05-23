import Vue from 'vue'
import VueX from 'vuex'
import axios from 'axios'

Vue.use(VueX)
export const store  = new VueX.Store({
    state: {
        token: localStorage.getItem('token') || null,
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
        },
        // REGISTER({commit} , payload){
        //         axios.post('http://localhost:8000/api/auth/register',{
        //             email:payload.email,
        //             password:payload.password,
        //             confirmPassword : payload.confirmPassword
        //         })
        //         .then((response) =>{
        //             return Promise.resolve(response)
        //         })
        //         .catch((error) =>{
        //             return Promise.reject(error)
                    
        //         })
        // },
        // LOGIN({commit} , payload){
        //     return new Promise((resolve, reject) =>{
        //         axios.post('http://localhost:8000/api/auth/login' ,{
        //         email:payload.email,
        //         password: payload.password
        //         })
        //         .then((response) =>{
        //             const token = response.data.token
        //             localStorage.setItem('token' , token)
        //             commit('SET_TOKEN', token)
        //             resolve(response)
        //         })
        //         .catch((error) =>{
        //             reject(error)
        //         })
        //     })
        // }
    }
})
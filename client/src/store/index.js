import Vue from 'vue'
import VueX from 'vuex'
import axios from 'axios'

Vue.use(VueX)
export const store  = new VueX.Store({
    state: {
        token: localStorage.getItem('token') || null,
        currentUser : {},
        product: [],
        listCategory:[]
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
        GET_CATEGORY(state,listCategory){
            state.listCategory = listCategory
        }
    },
    actions: {
        SET_TOKEN({commit} , token) {
            commit('SET_TOKEN', token )
        },
        SET_CURRENT_USER({commit} , user) {
            commit('SET_CURRENT_USER' , user)
        },
        REGISTER({commit} , payload){
            return new Promise((resolve,reject) =>{
                axios.post('http://localhost:8000/api/auth/register',{
                email:payload.email,
                password:payload.password,
                confirmPassword : payload.confirmPassword
                })
                .then((response) =>{
                    resolve(response)
                })
                .catch((error) =>{
                    reject(error)
                })
            })
        },
        LOGIN({commit} , payload){
            return new Promise((resolve, reject) =>{
                axios.post('http://localhost:8000/api/auth/login' ,{
                email:payload.email,
                password: payload.password
                })
                .then((response) =>{
                    const token = response.data.token
                    localStorage.setItem('token' , token)
                    commit('SET_TOKEN', token)
                    resolve(response)
                })
                .catch((error) =>{
                    reject(error)
                })
            })
        },
        GET_CATEGORY({commit} , payload){
            commit('GET_CATEGORY',payload)
        },
        CREATE_CATEGORY({commit} , payload) {
            const url ='http://localhost:8000/api/categories/'
            const header = {
                headers :{
                    Authorization :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzY4OGM2MjgwNDFjMWQ3Y2FkZjBlMSIsInVzZXJUeXBlIjoxMDAwLCJpYXQiOjE1OTA1ODg3ODYsImV4cCI6MTk1MDU4ODc4Nn0.RHInGHppwvp3wjVC9Rf5cxqS-pyeCtUQ8wVsJZgom3w'
                }
            }
            const data ={
                name :payload.name
            }
            return new Promise ((resolve, reject) =>{
                axios.post(url , data,header)
                .then((res) =>{
                    resolve(res)
                })
                .catch((err) =>{
                    reject(err)
                })
            })
        },
        DELETE_CATEGORY({commit} , payload){
            const url =`http://localhost:8000/api/categories/${payload.slug}`
            const header = {
                headers :{
                    Authorization :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzY4OGM2MjgwNDFjMWQ3Y2FkZjBlMSIsInVzZXJUeXBlIjoxMDAwLCJpYXQiOjE1OTA1ODg3ODYsImV4cCI6MTk1MDU4ODc4Nn0.RHInGHppwvp3wjVC9Rf5cxqS-pyeCtUQ8wVsJZgom3w'
                }
            }
            return new Promise ((resolve, reject) =>{
                axios.delete(url,header)
                .then((res) =>{
                    resolve(res)
                })
                .catch((err) =>{
                    reject(err)
                })
            })
        },
        EDIT_CATEGORY({commit} , payload){
            const url =`http://localhost:8000/api/categories/${payload.slug}`
            const header = {
                headers :{
                    Authorization :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzY4OGM2MjgwNDFjMWQ3Y2FkZjBlMSIsInVzZXJUeXBlIjoxMDAwLCJpYXQiOjE1OTA1ODg3ODYsImV4cCI6MTk1MDU4ODc4Nn0.RHInGHppwvp3wjVC9Rf5cxqS-pyeCtUQ8wVsJZgom3w'
                }
            }
            return new Promise ((resolve, reject) =>{
                axios.patch(url,header)
                .then((res) =>{
                    resolve(res)
                })
                .catch((err) =>{
                    reject(err)
                })
            })
        }
    }
})
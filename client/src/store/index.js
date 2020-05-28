import Vue from 'vue'
import VueX from 'vuex'
import axios from 'axios'

Vue.use(VueX)
export const store  = new VueX.Store({
    state: {
        token: localStorage.getItem('token') || null,
        currentUser : {},
        product: [
            {
                id:1459938,
                name:'SAM Ú NU',
                price:'12.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/05/96831557_1629904870490924_6197798263811211264_o-270x270.jpg'
            },
            {
                id:1459938,
                name:'ĐÀN MÈO ANH LÔNG NGẮN',
                price:'13.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/05/96412481_1628147887333289_7452454675938279424_o-270x270.jpg'
            },
            {
                id:1459938,
                name:'POODLE TRẮNG',
                price:'13.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/05/95341625_1622733514541393_5929136385725300736_o-270x270.jpg'
            },
            {
                id:1459938,
                name:'HUSKY SIÊU CUTE',
                price:'13.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/05/95168083_1619595481521863_3931317646317846528_o-200x200.jpg'
            },
            {
                id:1459938,
                name:'ĐÀN MÈO ANH LÔNG NGẮN',
                price:'13.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/02/c1-270x270.jpg'
            },
            {
                id:1459938,
                name:'EM MÈO TAI CỤP XINH XINH',
                price:'13.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/02/b1-300x300.jpg'
            },
            {
                id:1459938,
                name:'CÔNG CHÚA MÈO TAI CỤP',
                price:'13.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/02/a2-270x270.jpg'
            },
            {
                id:1459938,
                name:'HUSKY SIÊU CUTE',
                price:'13.000.000đ',
                img:'https://matpetfamily.com/wp-content/uploads/2020/05/95168083_1619595481521863_3931317646317846528_o-200x200.jpg'
            }
        ]
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
        }
    }
})
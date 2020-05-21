import {setCookie} from '../../../helpers/dataHelper';

export default {
    async signin({commit}, data) {
        const userAuth = await this.$axios.$post('http://localhost:8000/login',{
            email: data.email,
            password: data.password
        })
        if (userAuth)setCookie('userAuth', userAuth, 15);
        else setCookie('userAuth', null, -1);
        console.log(userAuth);
        commit('USER_SIGIN_MESSAGE', userAuth);
        return userAuth;
    },

};

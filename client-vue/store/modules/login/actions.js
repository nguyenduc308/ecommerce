import {setCookie} from '../../../helpers/dataHelper';

export default {
    async signin({commit}, user) {
        const userAuth = await this.$axios.$post('http://localhost:8000/api/auth/login',{
            email: user.email,
            password: user.password
        })
        return storeUserAuthentication(commit, userAuth);
    },

    logout({commit}) {
        storeUserAuthentication(commit);
        this.$router.push('/login');
    },

    async signup({commit}, data) {
        //delete data.cfPass;
        const userAuth = await this.$axios.$post('http://localhost:8000/api/auth/register', {
            fistName: data.fistName,
            lastName: data.lastName,
            phoneNumber: data.phone,
            email: data.email,
            password: data.password,
            confirmPassword: data.cfPass
        });

        return storeUserAuthentication(commit, userAuth);
    },

};

function storeUserAuthentication(commit, userAuth) {
    if (userAuth)
        setCookie('userAuth', userAuth, 15);
    else
        setCookie('userAuth', null, -1);
    
    commit('USER_AUTHENTICATION', userAuth);
    return userAuth;
}
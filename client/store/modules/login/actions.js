

export default {
    async signin({commit}, data) {
        commit('USER_SIGIN_MESSAGE', '');
        const userAuth = await this.$axios.$post('/////',data);
        return true;
    }

}
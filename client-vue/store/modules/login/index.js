import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

export default {
    namespaced: true,
    state: {
        userAuth: null,
        
    },
    getters,
    actions,
    mutations
};


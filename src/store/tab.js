export default {
    namespaced: true,
    state: {
        isAdmin: true,
        isCollapse: false,
    },
    mutations: {
        CHANGE_ISADMIN(state) {
            state.isAdmin = true;
        },
        CHANGE_ISCOLLAPSE(state) {
            state.isCollapse = !state.isCollapse;
        }
    }

}
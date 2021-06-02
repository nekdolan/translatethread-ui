export const state = () => ({
    userInfo: []
})

export const getters = {
    getUserInfo: state => id => {
       return state.userInfo.find(item => id == item.id)
    }
}

export const mutations = {
    add(state, value) {
        state.userInfo.push(value)
        console.log(state.userInfo)
    },
}

export const actions = {
    async fetchUserInfo({ commit, getters}, id) {
        const item = getters.getUserInfo(id)
        if (item) {
            return;
        }
        
        var res = await this.$userinfo({
            method: "get",
            url: "/userinfo?id=" + id,
        })
        commit('add', res.data);
    }
}
export const state = () => ({
    processing: [],
    userInfo: []
})

export const getters = {
    getUserInfo: state => id => {
       return state.userInfo.find(item => id == item.id)
    },
    processing: state => id => {
        return state.processing.find(item => id == item.id)
    },
   
}

export const mutations = {
    add(state, value) {
        state.userInfo.push(value)
    },
    startProcessing(state, value) {
        state.processing.push(value)
    },
    finishProcessing (state, id) {
        state.processing.splice(state.processing.findIndex(item => id == item.id), 1)
    }
}

export const actions = {
    async fetchUserInfo({ commit, getters}, id) {
        if (!id || id == "") {
            return;
        }
        
        const item = getters.processing(id)
        if (item) {
            return;
        }

        //to prevent duplicate calls to backend api
        commit('startProcessing', {id: id})

        var res = await this.$userinfo({
            method: "get",
            url: "/userinfo?id=" + id,
        })

        console.log(res.data)
        commit('add', res.data);
        commit('finishProcessing', id)
    }
}
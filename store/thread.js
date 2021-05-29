export const state = () => ({
    threads: []
})

export const getters = {
    getTranslatedThread: state => id => {
        state.threads.find(item => id == item.RequestTweet.ID)
    }
}

export const actions = {
   fetchTranslatedThread({commit}, id) {
        return this.$netlifyf({
            method: "get",
            url: "/" + id + ".json",
        })
    }
}
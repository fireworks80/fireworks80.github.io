import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titles: []
  },
  mutations: {
    fetch (state, {
      data
    }) {
      // console.log(data)
      state.titles = data
    }
  },
  actions: {
    fetch (store, payload) {
      axios.get('/api/titles')
        .then(res => {
          store.commit('fetch', res)
          // console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})

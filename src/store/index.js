import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Ele_one: null,
    Ele_two: null,
    Ele_three: null,
    cancel: null, //存储正在发送的请求
    user: null,
    islogin: null,
    id: null
  },
  mutations: {
    add(state, sele) {
      state.Ele_one = sele[0]
      state.Ele_two = sele[1]
      state.Ele_three = sele[2]
    },
    delete(state, sele) {
      for (let i = 0; i < sele.length; i++) {
        if (sele[i] === state.Ele_one) {
          state.Ele_one = null
          continue
        } else if (sele[i] === state.Ele_two) {
          state.Ele_two = null
          continue
        } else if (sele[i] === state.Ele_three) {
          state.Ele_three = null
          continue
        }
      }
    },
    cancelToken(state, ce) {
      state.cancel = ce
    },
    cancelnull(state, nu) {
      state.cancel = nu
    },
    useris(state, user) {
      state.user = user
    },
    savelogin(state, islogin) {
      state.islogin = islogin
    },
    idis(state, id) {
      state.id = id
    }
  },
  actions: {},
  modules: {}
})

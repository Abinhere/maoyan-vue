import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav:false
  },
  mutations: {
    SET_SHOW_NAV(state,status){
      state.showNav = status;
    }
  },
  actions: {
  },
  modules: {
  }
})

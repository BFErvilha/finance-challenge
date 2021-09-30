import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: {
      companyInfo: {},
      user: {}
    }
  },
  getters: {
    user (state) {
      return state.company.user
    }
  },
  actions: {
    register ({ commit }, company) {
      commit('SET_COMPANY', company)
      console.log(company)
    }
  },
  mutations: {
    SET_COMPANY (state, company) {
      state.company = company
    }
  },
  modules: {
  }
})

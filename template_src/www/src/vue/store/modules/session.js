const state = {
  language: ''
}

const getters = {
  getLanguage (state) {
    return state.language
  }
}

const mutations = {
  setLanguage: function (state, payload) {
    state.language = payload
  }
}

const actions = {
  updateLanguage: function ({commit}, payload) {
    commit('setLanguage', payload)
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

import Vue from 'vue'
import Vuex from 'vuex'

import session from './modules/session'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    session: session
  }
})

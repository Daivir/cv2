import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const i18n = {
  namespaced: true,
  state: {
    locales: ['en', 'fr'],
    locale: 'en'
  },
  getters: {},
  mutations: {
    SET_LANG (state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale
      }
    }
  },
  actions: {}
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    i18n
  }
})

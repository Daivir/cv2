import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // var userLang = navigator.language || navigator.userLanguage
//   const locale = to.params.lang || 'en'
//   console.log(locale)
//   store.commit('i18n/SET_LANG', locale)
//   next(vm => {
//     console.log(vm)
//   })
// })

const app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

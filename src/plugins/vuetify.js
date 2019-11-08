import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import en from 'vuetify/es5/locale/en'
import fr from 'vuetify/es5/locale/fr'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  lang: {
    locales: {
      'en': Object.assign(en, require('@/locales/en_US.json')),
      'fr': Object.assign(fr, require('@/locales/fr_FR.json'))
    },
    current: 'en'
  },
  icons: {
    iconfont: 'mdi'
  }
})

Vue.prototype.$vuetify = vuetify

export default vuetify

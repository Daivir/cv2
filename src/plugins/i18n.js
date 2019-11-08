import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default app => {
  app.i18n = new VueI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
      'en': require('@/locales/en_US.json'),
      'fr': require('@/locales/fr_FR.json')
    }
  })
}

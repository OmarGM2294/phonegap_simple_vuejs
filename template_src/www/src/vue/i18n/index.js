import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

Vue.use(VueI18n)

var locales = {
  en,
  es
}

export default new VueI18n({
  locale: navigator.language.slice(0,2),
  messages: locales,
  fallbackLocale: 'es'
})

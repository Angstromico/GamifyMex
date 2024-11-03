import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: 'es', // Set default language to Spanish
  fallbackLng: 'en', // Fallback language to English
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
})

export default i18n

import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

// Detect browser language
const getBrowserLocale = (): string => {
  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language

  if (!navigatorLocale) {
    return 'fr'
  }

  // Extract the language code (e.g., 'fr' from 'fr-FR')
  const trimmed = navigatorLocale.trim()
  const parts = trimmed.split(/-|_/)
  const languageCode = parts[0]

  // Check if we support this language
  const supportedLocales = ['fr', 'en']
  return languageCode && supportedLocales.includes(languageCode) ? languageCode : 'fr'
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en
  }
})

export default i18n

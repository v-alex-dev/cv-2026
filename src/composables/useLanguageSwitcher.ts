export const useLanguageSwitcher = () => {
  const availableLocales = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ]

  return {
    availableLocales
  }
}

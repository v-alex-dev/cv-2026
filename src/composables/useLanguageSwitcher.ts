export const useLanguageSwitcher = () => {
  const availableLocales = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' }
  ]

  return {
    availableLocales
  }
}

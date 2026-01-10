# Guide d'utilisation de l'internationalisation (i18n)

## Configuration actuelle

Le projet utilise **vue-i18n v11** avec détection automatique de la langue du navigateur.

## Langues supportées

- 🇫🇷 **Français** (fr) - Langue par défaut
- 🇬🇧 **Anglais** (en)

## Comment ça fonctionne

### Détection automatique

Au chargement de la page, le système détecte automatiquement la langue préférée de l'utilisateur via `navigator.language`.

**Code de détection** : `src/i18n/index.ts`

```typescript
const getBrowserLocale = (): string => {
  const navigatorLocale = navigator.languages?.[0] || navigator.language
  // Extrait 'fr' de 'fr-FR', 'en' de 'en-US', etc.
  const languageCode = navigatorLocale?.trim().split(/-|_/)[0]
  return supportedLocales.includes(languageCode) ? languageCode : 'fr'
}
```

### Changement manuel de langue

Un sélecteur de langue est disponible en haut à droite de la page (`LanguageSwitcher.vue`).

## Fichiers de traduction

Les traductions sont organisées dans des fichiers JSON :

- `src/i18n/locales/fr.json` - Traductions françaises
- `src/i18n/locales/en.json` - Traductions anglaises

### Structure des fichiers de traduction

```json
{
  "header": {
    "name": "Alexandre Vens",
    "title": "Développeur Backend Expert Laravel"
  },
  "contact": {
    "email": "dev.alexandre.cv@gmail.com"
  },
  "experience": {
    "title": "Expérience Professionnelle",
    "jobs": [
      {
        "company": "AVSIT",
        "position": "Stagiaire Développeur Backend",
        "tasks": ["..."]
      }
    ]
  }
}
```

## Utilisation dans les composants

### Import et initialisation

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>
```

### Affichage de traductions simples

```vue
<template>
  <h1>{{ t('header.name') }}</h1>
  <p>{{ t('contact.email') }}</p>
</template>
```

### Itération sur des tableaux traduits

Pour les données complexes (expériences, formations), il faut caster le type :

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Experience } from '../types/cv'

const { t } = useI18n()
const jobs = t('experience.jobs') as unknown as Experience[]
</script>

<template>
  <div v-for="job in jobs" :key="job.company">
    <h3>{{ job.position }}</h3>
    <p>{{ job.company }}</p>
  </div>
</template>
```

### Changer la langue programmatiquement

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const switchToEnglish = () => {
  locale.value = 'en'
}

const switchToFrench = () => {
  locale.value = 'fr'
}
</script>
```

## Ajouter une nouvelle langue

### 1. Créer le fichier de traduction

Créer `src/i18n/locales/es.json` pour l'espagnol par exemple :

```json
{
  "header": {
    "name": "Alexandre Vens",
    "title": "Desarrollador Backend Experto Laravel"
  },
  ...
}
```

### 2. Importer dans la configuration i18n

Modifier `src/i18n/index.ts` :

```typescript
import fr from './locales/fr.json'
import en from './locales/en.json'
import es from './locales/es.json' // Nouveau

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
    es  // Nouveau
  }
})
```

### 3. Ajouter dans le sélecteur de langue

Modifier `src/composables/useLanguageSwitcher.ts` :

```typescript
export const useLanguageSwitcher = () => {
  const availableLocales = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }  // Nouveau
  ]

  return { availableLocales }
}
```

### 4. Mettre à jour la détection automatique

Modifier `src/i18n/index.ts` :

```typescript
const supportedLocales = ['fr', 'en', 'es']  // Ajouter 'es'
```

## Bonnes pratiques

### 1. Organisation des clés

Utiliser une structure hiérarchique claire :

```json
{
  "section": {
    "subsection": {
      "key": "valeur"
    }
  }
}
```

### 2. Nommage des clés

- Utiliser des noms descriptifs
- Préférer le camelCase : `contactInfo`, `professionalExperience`
- Grouper par fonctionnalité ou composant

### 3. Synchronisation des fichiers

**Important** : Toutes les langues doivent avoir la même structure de clés !

Utiliser un validateur pour vérifier :

```bash
# Vous pouvez créer un script npm pour valider
npm run validate-i18n
```

### 4. Pluralisation

vue-i18n supporte la pluralisation :

```json
{
  "experience": "no experiences | 1 experience | {count} experiences"
}
```

Utilisation :

```vue
{{ t('experience', 0) }}  <!-- "no experiences" -->
{{ t('experience', 1) }}  <!-- "1 experience" -->
{{ t('experience', 5) }}  <!-- "5 experiences" -->
```

### 5. Interpolation de variables

```json
{
  "welcome": "Bienvenue {name} !"
}
```

Utilisation :

```vue
{{ t('welcome', { name: 'Alexandre' }) }}
<!-- Affiche: "Bienvenue Alexandre !" -->
```

## Debugging

### Afficher la langue actuelle

```vue
<template>
  <div>Langue actuelle : {{ locale }}</div>
</template>
```

### Vérifier qu'une clé existe

```vue
<script setup>
const { t, te } = useI18n()

if (te('some.key')) {
  console.log('La clé existe')
}
</script>
```

### Voir toutes les traductions chargées

```vue
<script setup>
const { messages } = useI18n()
console.log('Toutes les traductions:', messages.value)
</script>
```

## Ressources

- [Documentation officielle vue-i18n](https://vue-i18n.intlify.dev/)
- [Guide de migration v9 -> v11](https://vue-i18n.intlify.dev/guide/migration/vue3.html)
- [API Composition](https://vue-i18n.intlify.dev/api/composition.html)

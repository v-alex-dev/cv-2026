# Guide d'Architecture et des Composants

## 📁 Structure du projet

Le projet suit une architecture modulaire et scalable basée sur Vue.js 3 avec Composition API.

```
src/
├── components/         # Composants réutilisables
├── composables/        # Logique métier réutilisable
├── i18n/              # Internationalisation
├── types/             # Définitions TypeScript
├── views/             # Pages/Vues
├── router/            # Configuration du routeur
├── App.vue            # Composant racine
└── main.ts            # Point d'entrée
```

## 🧩 Composants

### CVHeader.vue

**Rôle** : En-tête de la page avec nom, titre et sous-titre

**Props** : Aucune (utilise i18n)

**Données affichées** :
- `header.name` - Nom complet
- `header.title` - Titre principal
- `header.subtitle` - Sous-titre

**Exemple d'utilisation** :
```vue
<CVHeader />
```

**Personnalisation** :
- Modifier les couleurs du gradient dans la propriété `background`
- Ajuster la taille des polices dans les classes `.name`, `.title`, `.subtitle`

---

### LanguageSwitcher.vue

**Rôle** : Sélecteur de langue flottant

**Props** : Aucune

**État** :
- `locale` - Langue active (géré par vue-i18n)

**Méthodes** :
- `switchLanguage(code: string)` - Change la langue

**Exemple d'utilisation** :
```vue
<LanguageSwitcher />
```

**Personnalisation** :
- Position : Modifier `position`, `top`, `right` dans `.language-switcher`
- Ajouter des langues dans `useLanguageSwitcher.ts`

---

### ContactInfo.vue

**Rôle** : Affiche les informations de contact

**Props** : Aucune (utilise i18n)

**Sections** :
- Adresse
- Téléphone
- Email
- Permis de conduire
- Langues parlées

**Exemple d'utilisation** :
```vue
<ContactInfo />
```

**Personnalisation** :
- Modifier `contact-grid` pour changer la disposition
- Personnaliser les icônes emoji

---

### ProfileSection.vue

**Rôle** : Section "À propos" avec description et soft skills

**Props** : Aucune (utilise i18n)

**Données** :
- `profile.description` - Description principale
- `profile.highlight` - Citation mise en avant
- `profile.softSkills.*` - Compétences humaines

**Exemple d'utilisation** :
```vue
<ProfileSection />
```

**Personnalisation** :
- Modifier les icônes dans `softSkills` array
- Ajuster les couleurs de `.highlight`

---

### ExperienceSection.vue

**Rôle** : Timeline des expériences professionnelles

**Props** : Aucune (utilise i18n)

**Type** : `Experience[]`

**Structure des données** :
```typescript
interface Experience {
  company: string
  position: string
  period: string
  location: string
  tasks: string[]
  achievements?: string
}
```

**Exemple d'utilisation** :
```vue
<ExperienceSection />
```

**Personnalisation** :
- Modifier `.timeline::before` pour changer la ligne de temps
- Couleur des puces : `.experience-item::before`

---

### SkillsSection.vue

**Rôle** : Affiche les compétences techniques par catégorie

**Props** : Aucune (utilise i18n)

**Catégories** :
- Backend
- Frontend
- Tools (Outils)
- Learning (En apprentissage)
- Methodology (Méthodologies)

**Exemple d'utilisation** :
```vue
<SkillsSection />
```

**Personnalisation** :
- Modifier `skillCategories` pour changer les icônes et couleurs
- Ajuster `grid-template-columns` pour la disposition

---

### EducationSection.vue

**Rôle** : Affiche la formation académique

**Props** : Aucune (utilise i18n)

**Type** : `Education[]`

**Structure des données** :
```typescript
interface Education {
  school: string
  location: string
  degree: string
  period: string
  description: string
}
```

**Exemple d'utilisation** :
```vue
<EducationSection />
```

**Personnalisation** :
- Modifier `.education-icon` pour changer l'emoji
- Ajuster la grille dans `.education-grid`

---

### CVFooter.vue

**Rôle** : Pied de page avec références et copyright

**Props** : Aucune (utilise i18n)

**Données** :
- `footer.references` - Texte de référence
- `footer.madeWith` - Signature

**Exemple d'utilisation** :
```vue
<CVFooter />
```

---

## 🎨 Système de styles

### Variables globales

Actuellement, les couleurs sont en dur dans les composants. Pour centraliser :

**Option 1 : CSS Variables (Recommandé)**

Créer `src/assets/styles/variables.css` :

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-success: #48bb78;
  --color-warning: #ed8936;
  --color-info: #38b2ac;
  --color-text: #2d3748;
  --color-text-light: #4a5568;
  --color-bg: #f7fafc;
  --color-bg-alt: #edf2f7;
}
```

Importer dans `main.ts` :
```typescript
import './assets/styles/variables.css'
```

Utiliser dans les composants :
```css
.element {
  color: var(--color-primary);
  background: var(--color-bg);
}
```

**Option 2 : SCSS**

Pour plus de puissance, installer SCSS :

```bash
npm install -D sass
```

Créer `src/assets/styles/_variables.scss` :

```scss
$colors: (
  primary: #667eea,
  secondary: #764ba2,
  success: #48bb78
);

$breakpoints: (
  mobile: 768px,
  tablet: 1024px,
  desktop: 1280px
);
```

### Classes utilitaires

Les styles communs sont dans `App.vue` :

- `.cv-section` - Container de section
- `.section-title` - Titre de section

### Responsive Design

Breakpoint standard : `768px`

```css
@media (max-width: 768px) {
  /* Styles mobile */
}
```

---

## 🔧 Composables

### useLanguageSwitcher.ts

**Rôle** : Fournit la liste des langues disponibles

**Export** :
```typescript
{
  availableLocales: Array<{
    code: string
    name: string
    flag: string
  }>
}
```

**Utilisation** :
```vue
<script setup>
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher'

const { availableLocales } = useLanguageSwitcher()
</script>
```

**Extension** :

Pour ajouter des fonctionnalités :

```typescript
export const useLanguageSwitcher = () => {
  const { locale } = useI18n()
  
  const availableLocales = [...]
  
  const currentLocale = computed(() => 
    availableLocales.find(l => l.code === locale.value)
  )
  
  const switchToNext = () => {
    const currentIndex = availableLocales.findIndex(l => l.code === locale.value)
    const nextIndex = (currentIndex + 1) % availableLocales.length
    locale.value = availableLocales[nextIndex].code
  }
  
  return {
    availableLocales,
    currentLocale,
    switchToNext
  }
}
```

---

## 📊 Types TypeScript

### Fichier : `src/types/cv.ts`

**Types disponibles** :

```typescript
interface Experience {
  company: string
  position: string
  period: string
  location: string
  tasks: string[]
  achievements?: string
}

interface Education {
  school: string
  location: string
  degree: string
  period: string
  description: string
}

interface SkillCategory {
  title: string
  items: string[]
}

interface ContactInfo {
  address: string
  phone: string
  email: string
  license: string
}

interface SoftSkills {
  teamwork: string
  adaptability: string
  resilience: string
  collaborative: string
  learning: string
}
```

**Utilisation** :

```vue
<script setup lang="ts">
import type { Experience } from '@/types/cv'

const experience: Experience = {
  company: 'AVSIT',
  position: 'Backend Developer',
  // ...
}
</script>
```

---

## 🚀 Créer un nouveau composant

### Template de composant

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Props (si nécessaire)
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default Title'
})

// Composables
const { t } = useI18n()

// État local
const isActive = ref(false)

// Méthodes
const handleClick = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="my-component">
    <h3>{{ props.title }}</h3>
    <!-- Contenu -->
  </div>
</template>

<style scoped>
.my-component {
  /* Styles */
}

@media (max-width: 768px) {
  .my-component {
    /* Styles responsive */
  }
}
</style>
```

### Checklist pour nouveau composant

- [ ] Créer le fichier dans `src/components/`
- [ ] Nom en PascalCase (ex: `MyComponent.vue`)
- [ ] Ajouter les types TypeScript si nécessaire
- [ ] Documenter les props et events
- [ ] Ajouter les traductions dans les fichiers i18n
- [ ] Tester responsive
- [ ] Ajouter dans la vue si nécessaire

---

## 🧪 Bonnes pratiques

### 1. Composition API

Toujours utiliser `<script setup>` :

```vue
<script setup lang="ts">
// Plus concis et performant
</script>
```

### 2. TypeScript strict

Typer les props, events, et variables :

```typescript
const count = ref<number>(0)
const message = ref<string>('')
```

### 3. Décomposition des composables

Extraire `t` et `locale` séparément :

```typescript
const { t, locale } = useI18n()
```

### 4. Styles scoped

Toujours utiliser `scoped` sauf pour les styles globaux :

```vue
<style scoped>
/* Styles isolés au composant */
</style>
```

### 5. Éviter les magic strings

Créer des constantes pour les valeurs réutilisées :

```typescript
const BREAKPOINT_MOBILE = 768
const PRIMARY_COLOR = '#667eea'
```

### 6. Accessibilité

Toujours ajouter les attributs ARIA :

```vue
<button :aria-label="t('close')">×</button>
```

---

## 📚 Ressources

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript avec Vue](https://vuejs.org/guide/typescript/overview.html)
- [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue Router](https://router.vuejs.org/)

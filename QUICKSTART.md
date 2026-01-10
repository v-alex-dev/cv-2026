# 🚀 Quick Start - CV 2026

## ⚡ Commandes essentielles

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview

# Vérifier les types TypeScript
npm run type-check

# Linter le code
npm run lint

# Formatter le code
npm run format
```

## 📝 Modifier le contenu

### Localisation des fichiers

| Quoi modifier | Fichier |
|---------------|---------|
| Texte français | `src/i18n/locales/fr.json` |
| Texte anglais | `src/i18n/locales/en.json` |
| Styles globaux | `src/App.vue` |
| Page HTML | `index.html` |

### Sections rapides

```json
// fr.json ou en.json

{
  "header": {
    "name": "Votre Nom",
    "title": "Votre Titre"
  },
  
  "contact": {
    "email": "votre@email.com",
    "phone": "Votre téléphone"
  },
  
  "profile": {
    "description": "Votre présentation..."
  },
  
  "experience": {
    "jobs": [
      {
        "company": "Entreprise",
        "position": "Poste",
        "period": "2024",
        "tasks": ["Tâche 1", "Tâche 2"]
      }
    ]
  }
}
```

## 🎨 Personnalisation rapide

### Changer les couleurs

Chercher et remplacer dans tous les fichiers `.vue` :

| Ancien | Nouveau | Usage |
|--------|---------|-------|
| `#667eea` | `#YOUR_COLOR` | Couleur principale |
| `#764ba2` | `#YOUR_COLOR` | Couleur secondaire |
| `#48bb78` | `#YOUR_COLOR` | Couleur success/green |

### Modifier le header

**Fichier**: `src/components/CVHeader.vue`

```vue
<style scoped>
.cv-header {
  background: linear-gradient(135deg, #NEW_COLOR1 0%, #NEW_COLOR2 100%);
  padding: 3rem 2rem; /* Ajuster la hauteur */
}

.name {
  font-size: 3rem; /* Taille du nom */
}
</style>
```

## 🌍 Langues

### Ajouter une langue (exemple: Espagnol)

**1. Créer le fichier**
```bash
touch src/i18n/locales/es.json
```

**2. Copier la structure de fr.json**

**3. Modifier** `src/i18n/index.ts`:
```typescript
import es from './locales/es.json'

messages: {
  fr,
  en,
  es  // Ajouter
}

// Mettre à jour supportedLocales
const supportedLocales = ['fr', 'en', 'es']
```

**4. Modifier** `src/composables/useLanguageSwitcher.ts`:
```typescript
const availableLocales = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
]
```

## 🧩 Ajouter un composant

**1. Créer le fichier**
```bash
touch src/components/MyNewSection.vue
```

**2. Template de base**
```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="cv-section my-section">
    <h3 class="section-title">{{ t('mySection.title') }}</h3>
    <!-- Votre contenu -->
  </section>
</template>

<style scoped>
.my-section {
  /* Vos styles */
}
</style>
```

**3. Ajouter dans** `src/views/HomeView.vue`:
```vue
<script setup lang="ts">
import MyNewSection from '../components/MyNewSection.vue'
</script>

<template>
  <div class="cv-page">
    <!-- ... autres composants ... -->
    <MyNewSection />
  </div>
</template>
```

**4. Ajouter traductions dans les JSON**
```json
{
  "mySection": {
    "title": "Mon Nouveau Titre"
  }
}
```

## 📱 Responsive

### Breakpoint standard
```css
@media (max-width: 768px) {
  /* Styles mobile */
}
```

### Classes globales disponibles

- `.cv-section` - Container de section
- `.section-title` - Titre de section
- `.cv-container` - Container principal

## 🐛 Résolution de problèmes

### Le site ne charge pas
```bash
# 1. Vérifier que le serveur tourne
npm run dev

# 2. Vérifier l'URL
http://localhost:5173
```

### Erreurs TypeScript
```bash
# Vérifier les erreurs
npm run type-check

# Erreurs courantes:
# - Oublier de caster les types dans les boucles v-for
# - Clés manquantes dans les fichiers i18n
```

### Traductions ne s'affichent pas
```bash
# 1. Vérifier la console du navigateur
# 2. Vérifier que la clé existe dans les deux fichiers
# 3. Vérifier la syntaxe JSON (pas de virgule en trop)
```

### Hot reload ne fonctionne pas
```bash
# Redémarrer le serveur
Ctrl+C
npm run dev
```

## 📦 Déploiement

### GitHub Pages

**1. Build**
```bash
npm run build
```

**2. Configurer** `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/cv-2026/', // Nom du repo
  // ...
})
```

**3. Déployer** (exemple avec gh-pages):
```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

### Netlify

1. Drag & drop du dossier `dist/` sur netlify.com
2. Ou connecter le repo GitHub

### Vercel

```bash
npm install -g vercel
vercel
```

## 🎯 Checklist avant déploiement

- [ ] `npm run type-check` → 0 erreurs
- [ ] `npm run lint` → 0 erreurs
- [ ] Tester en FR et EN
- [ ] Tester sur mobile
- [ ] Vérifier toutes les sections
- [ ] Mettre à jour README si nécessaire
- [ ] `npm run build` → succès

## 📚 Liens utiles

| Resource | URL |
|----------|-----|
| Doc complète | [README.md](README.md) |
| Guide i18n | [docs/I18N_GUIDE.md](docs/I18N_GUIDE.md) |
| Architecture | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Résumé | [SUMMARY.md](SUMMARY.md) |
| Changelog | [CHANGELOG.md](CHANGELOG.md) |

## 💡 Tips

### Développement rapide

1. **Ouvrir deux terminaux**:
   - Terminal 1: `npm run dev`
   - Terminal 2: Pour les commandes

2. **Extensions VS Code recommandées**:
   - Vue (Official)
   - TypeScript Vue Plugin (Volar)
   - ESLint
   - Prettier

3. **Raccourcis clavier**:
   - `Ctrl+S` : Sauvegarder (hot reload auto)
   - `Ctrl+Shift+P` : Command palette
   - `F12` : DevTools

### Bonnes pratiques

✅ Toujours typer avec TypeScript  
✅ Utiliser `<script setup>`  
✅ Styles `scoped` par défaut  
✅ Commiter souvent  
✅ Tester sur différents navigateurs  

---

**Créé par**: Alexandre Vens  
**Date**: 7 janvier 2026  
**Version**: 1.0.0

# CV 2026 - Alexandre Vens

## 🎯 Description

CV moderne et interactif mettant en avant l'expertise Backend de Alexandre Vens avec un focus sur Laravel, tout en démontrant sa polyvalence frontend.

## ✨ Fonctionnalités

- 🌍 **i18n automatique** : Détection automatique de la langue du navigateur (Français/Anglais)
- 🎨 **Design moderne** : Interface élégante et professionnelle
- 📱 **Responsive** : Optimisé pour tous les écrans
- 🧩 **Architecture modulaire** : Components Vue.js réutilisables
- ⚡ **Performance** : Built avec Vite pour un chargement ultra-rapide
- 🔒 **TypeScript** : Code typé pour plus de robustesse

## 🛠️ Technologies

- **Framework** : Vue.js 3 (Composition API)
- **Language** : TypeScript
- **Internationalisation** : vue-i18n
- **Routing** : Vue Router
- **Build tool** : Vite
- **Styling** : CSS moderne avec variables et animations

## 🏗️ Structure du projet

```
cv-2026/
├── src/
│   ├── components/          # Composants Vue réutilisables
│   │   ├── CVHeader.vue
│   │   ├── ContactInfo.vue
│   │   ├── ProfileSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── EducationSection.vue
│   │   ├── CVFooter.vue
│   │   └── LanguageSwitcher.vue
│   ├── composables/         # Logique réutilisable
│   │   └── useLanguageSwitcher.ts
│   ├── i18n/               # Configuration i18n
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── fr.json     # Traductions françaises
│   │       └── en.json     # Traductions anglaises
│   ├── types/              # Définitions TypeScript
│   │   └── cv.ts
│   ├── views/              # Pages de l'application
│   │   └── HomeView.vue
│   ├── router/             # Configuration du routeur
│   │   └── index.ts
│   ├── App.vue             # Composant racine
│   └── main.ts             # Point d'entrée
├── public/                 # Assets statiques
├── index.html             # Template HTML
├── package.json           # Dépendances
├── tsconfig.json          # Configuration TypeScript
├── vite.config.ts         # Configuration Vite
└── README.md
```

## 🚀 Installation et utilisation

### Installation des dépendances

```sh
npm install
```

### Lancer le serveur de développement

```sh
npm run dev
```

### Build pour la production

```sh
npm run build
```

### Prévisualiser le build de production

```sh
npm run preview
```

### Type-Check

```sh
npm run type-check
```

### Lint avec ESLint

```sh
npm run lint
```

## 🌐 i18n - Internationalisation

Le projet utilise **vue-i18n** avec détection automatique de la langue du navigateur :

### Détection automatique
La langue est automatiquement détectée au chargement via `navigator.language` :
- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais

### Changement manuel
Un sélecteur de langue est disponible en haut à droite de la page pour changer manuellement la langue.

### Ajout d'une nouvelle langue

1. Créer un nouveau fichier dans `src/i18n/locales/` (ex: `es.json`)
2. Ajouter les traductions
3. Importer et ajouter dans `src/i18n/index.ts`
4. Ajouter la locale dans `useLanguageSwitcher.ts`

## 📝 Mise à jour du contenu

### Modifier les informations du CV

Tous les textes sont centralisés dans les fichiers de traduction :
- `src/i18n/locales/fr.json` pour le français
- `src/i18n/locales/en.json` pour l'anglais

### Structure des données

Les fichiers JSON sont organisés en sections :
- `header` : Nom, titre, sous-titre
- `contact` : Informations de contact
- `profile` : Présentation et soft skills
- `experience` : Expériences professionnelles
- `skills` : Compétences techniques (backend, frontend, outils, etc.)
- `education` : Formation
- `footer` : Pied de page

## 🎨 Personnalisation du design

### Couleurs principales
Les couleurs sont définies dans les styles des composants :
- **Primary** : `#667eea` (Violet)
- **Secondary** : `#764ba2` (Violet foncé)
- **Success** : `#48bb78` (Vert)
- **Warning** : `#ed8936` (Orange)

### Modifier le thème
Pour changer les couleurs, recherchez et remplacez les valeurs dans les fichiers `.vue` des composants.

## 📦 Déploiement

Le projet peut être déployé sur :
- **GitHub Pages** : Configurer `vite.config.ts` avec le bon `base`
- **Netlify** : Drag & drop du dossier `dist`
- **Vercel** : Import du repository GitHub
- Tout hébergeur supportant les sites statiques

## 👤 Auteur

**Alexandre Vens**
- Email: dev.alexandre.cv@gmail.com
- Développeur Backend Expert Laravel

---

Réalisé avec ❤️ avec Vue.js & TypeScript

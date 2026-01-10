<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>

:root {
  /* Couleur primaire - Rouge Laravel signature */
  --color-primary: #FF2D20;
  --color-primary-dark: #E3271D;
  --color-primary-light: #FF4436;
  --color-primary-alpha: rgba(255, 45, 32, 0.1);
  
  /* Couleur secondaire - Tons gris modernes */
  --color-secondary: #18181B;
  --color-secondary-light: #52525B;
  
  /* Couleurs de fond */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-tertiary: #F3F4F6;
  
  /* Couleurs de texte */
  --color-text-primary: #18181B;
  --color-text-secondary: #52525B;
  --color-text-tertiary: #71717A;
  
  /* Couleurs d'accent et états */
  --color-accent: #F97316;
  --color-success: #10B981;
  --color-hover: #DC2626;
  --color-focus: #FF2D20;
  
  /* Bordures */
  --color-border: #E5E7EB;
  --color-border-focus: #FF2D20;
  
  /* Ombres */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-primary: 0 4px 14px rgba(255, 45, 32, 0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.cv-section {
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  background: var(--color-bg-primary);
}

.section-title {
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid var(--color-primary);
  display: inline-block;
}

@media (max-width: 1024px) {
  .cv-section {
    padding: 1.75rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .cv-section {
    padding: 1.5rem;
    border-radius: 0.75rem;
  }
  
  .section-title {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom-width: 2px;
  }
}

@media (max-width: 480px) {
  .cv-section {
    padding: 1.25rem;
    border-radius: 0.5rem;
  }
  
  .section-title {
    font-size: 1.35rem;
  }
}

/* ============================================
   STYLES POUR L'IMPRESSION PDF
   ============================================ */
@media print {
  /* Supprimer les en-têtes et pieds de page automatiques du navigateur */
  @page {
    margin: 1cm;
    size: A4;
  }
  
  :root {
    --color-bg-secondary: #FFFFFF;
  }
  
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  body {
    background: white;
    margin: 0;
    padding: 0;
  }
  
  .cv-section {
    box-shadow: none;
    page-break-inside: auto;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 0;
  }
  
  .section-title {
    page-break-after: avoid;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  /* Pagination intelligente - éviter les coupures gênantes */
  h1, h2, h3, h4 {
    page-break-after: avoid;
    page-break-inside: avoid;
  }
  
  /* Éviter de couper les éléments individuels */
  .experience-item,
  .education-item,
  .skill-category,
  .contact-item {
    page-break-inside: avoid;
  }
  
  /* Permettre les listes de se diviser si nécessaire */
  ul, ol {
    page-break-inside: auto;
  }
  
  /* Items de liste individuels ne doivent pas être coupés */
  li {
    page-break-inside: avoid;
  }
  
  /* Cacher les éléments non imprimables */
  button {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

const downloadPDF = () => {
  window.print()
}
</script>

<template>
  <header class="cv-header">
    <button 
      @click="downloadPDF" 
      class="pdf-btn"
      :title="t('header.downloadPDF') || 'Télécharger en PDF'"
    >
      <ArrowDownTrayIcon class="icon" />
      <span class="btn-text">PDF</span>
    </button>
    
    <LanguageSwitcher />
    
    <img src="/me-cv.png" alt="Alexandre Vens" class="profile-photo" />
    
    <div class="header-content">
      <h1 class="name">{{ t('header.name') }}</h1>
      <h2 class="title">{{ t('header.title') }}</h2>
      <p class="subtitle">{{ t('header.subtitle') }}</p>
    </div>
  </header>
</template>

<style scoped>
.cv-header {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: var(--shadow-primary);
  position: relative;
}

.pdf-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-size: 0.95rem;
  z-index: 10;
}

.pdf-btn:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.pdf-btn .icon {
  width: 1.25rem;
  height: 1.25rem;
}

.pdf-btn .btn-text {
  font-weight: 600;
}

.header-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.profile-photo {
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 30%;
  border: 4px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.name {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0;
  opacity: 0.95;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  margin: 0.5rem 0 0;
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .cv-header {
    padding: 2.5rem 1.5rem;
  }
  
  .pdf-btn {
    top: 1.25rem;
    right: 1.25rem;
  }
  
  .header-content {
    gap: 1.5rem;
  }
  
  .profile-photo {
    width: 130px;
    height: 130px;
  }
  
  .name {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .cv-header {
    padding: 2rem 1rem;
    border-radius: 0 0 1rem 1rem;
  }
  
  .pdf-btn {
    top: 1rem;
    right: 1rem;
    padding: 0.4rem 0.75rem;
  }
  
  .pdf-btn .btn-text {
    display: none;
  }
  
  .profile-photo {
    width: 110px;
    height: 110px;
    left: 1.5rem;
  }
  
  .name {
    font-size: 2rem;
  }
  
  .title {
    font-size: 1.2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .cv-header {
    padding: 1.5rem 0.75rem;
  }
  
  .pdf-btn {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.375rem 0.625rem;
    border-width: 1.5px;
  }
  
  .pdf-btn .icon {
    width: 1.1rem;
    height: 1.1rem;
  }
  
  .profile-photo {
    width: 90px;
    height: 90px;
    border-width: 3px;
    left: 1rem;
  }
  
  .header-content {
    gap: 1rem;
  }
  
  .name {
    font-size: 1.75rem;
  }
  
  .title {
    font-size: 1.1rem;
  }
  
  .subtitle {
    font-size: 0.9rem;
  }
}

@media print {
  .pdf-btn {
    display: none;
  }
  
  .cv-header {
    border-radius: 0;
    padding: 2rem 1rem;
    box-shadow: none;
    page-break-after: avoid;
  }
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CVHeader from '../components/CVHeader.vue'
import ContactInfo from '../components/ContactInfo.vue'
import ProfileSection from '../components/ProfileSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import EducationSection from '../components/EducationSection.vue'
import CVFooter from '../components/CVFooter.vue'

const { t } = useI18n()

// Set page title
if (typeof document !== 'undefined') {
  document.title = t('meta.title')
}
</script>

<template>
  <div class="cv-page">
    <CVHeader />
    
    <main class="cv-main">
      <div class="cv-container">
        <ProfileSection />
        <ContactInfo />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </main>
    
    <CVFooter />
  </div>
</template>

<style scoped>
.cv-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f7fafc 0%, #edf2f7 100%);
}

.cv-main {
  padding: 2rem 1rem;
}

.cv-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Tablette */
@media (max-width: 1024px) {
  .cv-container {
    max-width: 100%;
    padding: 0 1rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .cv-main {
    padding: 1.5rem 0.75rem;
  }
  
  .cv-container {
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .cv-main {
    padding: 1rem 0.5rem;
  }
  
  .cv-container {
    gap: 1rem;
    padding: 0;
  }
}

@media print {
  .cv-page {
    background: white;
  }
  
  .cv-main {
    padding: 0;
  }
  
  .cv-container {
    max-width: 100%;
    gap: 1rem;
    padding: 0;
  }
}
</style>

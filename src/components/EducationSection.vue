<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { AcademicCapIcon } from '@heroicons/vue/24/outline'
import type { Education } from '../types/cv'

const { t, tm } = useI18n()

// Use tm() to get the array
const educationItems = tm('education.items') as unknown as Education[]
</script>

<template>
  <section class="cv-section education-section">
    <h3 class="section-title">{{ t('education.title') }}</h3>
    
    <div class="education-grid">
      <article
        v-for="(item, index) in educationItems"
        :key="index"
        class="education-item"
      >
        <AcademicCapIcon class="education-icon" />
        <div class="education-content">
          <h4 class="degree">{{ item.degree }}</h4>
          <p class="school">{{ item.school }}</p>
          <p class="location-period">{{ item.location }} • {{ item.period }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  background: white;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.education-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-bg-secondary);
  border-radius: 0.75rem;
  border: 2px solid var(--color-border);
  transition: all 0.3s ease;
}

.education-item:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.education-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-primary);
  flex-shrink: 0;
}

.education-content {
  flex: 1;
}

.degree {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.school {
  color: var(--color-primary);
  font-weight: 500;
  margin: 0 0 0.25rem 0;
}

.location-period {
  color: var(--color-text-tertiary);
  font-size: 0.9rem;
  margin: 0 0 0.75rem 0;
}

.description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .education-item {
    padding: 1.25rem;
  }
  
  .education-icon {
    width: 2rem;
    height: 2rem;
  }
  
  .degree {
    font-size: 1rem;
  }
  
  .description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .education-item {
    padding: 1rem;
    gap: 1rem;
  }
  
  .education-icon {
    width: 1.75rem;
    height: 1.75rem;
  }
  
  .degree {
    font-size: 0.95rem;
  }
  
  .school,
  .location-period {
    font-size: 0.85rem;
  }
  
  .description {
    font-size: 0.85rem;
  }
}
</style>

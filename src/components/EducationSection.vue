<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Education } from '../types/cv'

const { t, tm, locale } = useI18n()

const educationItems = computed(() => {
  void locale.value
  return tm('education.items') as unknown as Education[]
})
</script>

<template>
  <section class="cv-section education-section">
    <h3 class="section-title">{{ t('education.title') }}</h3>

    <div class="education-grid">
      <article v-for="(item, index) in educationItems" :key="index" class="education-item">
        <h4 class="degree">{{ item.degree }}</h4>
        <p class="school">{{ item.school }}</p>
        <p class="location-period">{{ item.location }} · {{ item.period }}</p>
        <p v-if="item.description" class="description">{{ item.description }}</p>
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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.education-item {
  padding: 1.1rem 1.25rem;
  background: var(--color-bg-secondary);
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease;
}

.education-item:hover {
  border-color: var(--color-primary);
}

.degree {
  font-size: 1rem;
  color: var(--color-text-primary);
  margin: 0 0 0.25rem 0;
  font-weight: 600;
}

.school {
  color: var(--color-primary);
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0 0 0.2rem 0;
}

.location-period {
  color: var(--color-text-tertiary);
  font-size: 0.85rem;
  margin: 0 0 0.5rem 0;
}

.description {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1024px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .education-item {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .education-item {
    padding: 0.875rem;
  }

  .degree {
    font-size: 0.95rem;
  }
}
</style>

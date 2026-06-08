<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const skillCategories = [
  { key: 'backend', accent: '#FF2D20' },
  { key: 'frontend', accent: '#F97316' },
  { key: 'data', accent: '#0EA5E9' },
  { key: 'tools', accent: '#71717A' },
  { key: 'learning', accent: '#8B5CF6' }
] as const
</script>

<template>
  <section class="cv-section skills-section">
    <h3 class="section-title">{{ t('skills.title') }}</h3>

    <div class="skills-container">
      <div
        v-for="category in skillCategories"
        :key="category.key"
        class="skill-category"
      >
        <h4
          class="category-title"
          :style="{ color: category.accent }"
        >
          {{ t(`skills.${category.key}.title`) }}
        </h4>

        <ul class="skill-items">
          <li
            v-for="(skill, index) in tm(`skills.${category.key}.items`)"
            :key="index"
            class="skill-item"
            :style="{ '--skill-color': category.accent }"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background: var(--color-bg-secondary);
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.skill-category {
  background: var(--color-bg-primary);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease;
}

.skill-category:hover {
  border-color: var(--color-primary);
}

.category-title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0 0 0.75rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.skill-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.skill-item {
  position: relative;
  padding: 0.2rem 0 0.2rem 0.9rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.4;
}

.skill-item::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--skill-color);
  font-size: 0.7rem;
  top: 0.3rem;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .skills-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .skill-category {
    padding: 0.875rem;
  }
}

@media (max-width: 480px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const softSkillKeys = [
  'teamwork',
  'adaptability',
  'resilience',
  'collaborative',
  'learning',
] as const
</script>

<template>
  <section class="cv-section profile-section">
    <h3 class="section-title">{{ t('profile.title') }}</h3>

    <div class="profile-content">
      <p class="description">{{ t('profile.description') }}</p>
      <p class="highlight">{{ t('profile.highlight') }}</p>
    </div>

    <div class="soft-skills">
      <h4>{{ t('profile.softSkills.title') }}</h4>
      <ul class="skills-list">
        <li v-for="key in softSkillKeys" :key="key" class="skill-item">
          {{ t(`profile.softSkills.${key}`) }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  background: var(--color-bg-primary);
}

.profile-content {
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-primary);
  margin: 0 0 1rem 0;
}

.highlight {
  border-left: 3px solid var(--color-primary);
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text-secondary);
  font-style: italic;
  margin: 0;
  background: transparent;
}

.soft-skills h4 {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 1.25rem 0 0.75rem 0;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
}

.skills-list .skill-item {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  position: relative;
  padding-left: 0.9rem;
}

.skills-list .skill-item::before {
  content: '/';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .description {
    font-size: 0.95rem;
  }

  .highlight {
    padding: 0.625rem 0.875rem;
    font-size: 0.9rem;
  }

  .skills-list {
    gap: 0.4rem 1.25rem;
  }
}

@media (max-width: 480px) {
  .description {
    font-size: 0.9rem;
  }

  .highlight {
    font-size: 0.875rem;
  }
}
</style>

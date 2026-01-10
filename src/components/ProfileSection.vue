<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { UsersIcon, ArrowPathIcon, BoltIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline'

const { t } = useI18n()

const softSkills = [
  { key: 'teamwork', icon: UsersIcon },
  { key: 'adaptability', icon: ArrowPathIcon },
  { key: 'resilience', icon: BoltIcon },
  { key: 'collaborative', icon: UserGroupIcon },
  { key: 'learning', icon: RocketLaunchIcon }
]
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
      <div class="skills-grid">
        <div
          v-for="skill in softSkills"
          :key="skill.key"
          class="skill-badge"
        >
          <component :is="skill.icon" class="skill-icon" />
          <span class="skill-name">{{ t(`profile.softSkills.${skill.key}`) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  background: var(--color-bg-primary);
}

.profile-content {
  margin-bottom: 2rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
}

.highlight {
  background: var(--color-primary-alpha);
  padding: 1.5rem;
  border-left: 4px solid var(--color-primary);
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  font-style: italic;
}

.soft-skills h4 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.skill-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.skill-badge:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.skill-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary);
  flex-shrink: 0;
}

.skill-name {
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .description {
    font-size: 1rem;
  }
  
  .highlight {
    padding: 1.25rem;
    font-size: 0.95rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .skill-badge {
    padding: 0.625rem 0.875rem;
  }
}

@media (max-width: 480px) {
  .description {
    font-size: 0.95rem;
  }
  
  .highlight {
    padding: 1rem;
    font-size: 0.9rem;
  }
  
  .soft-skills h4 {
    font-size: 1.1rem;
  }
}
</style>

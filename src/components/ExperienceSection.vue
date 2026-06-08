<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Experience } from '../types/cv'

const { t, tm, locale } = useI18n()

const jobs = computed(() => {
  // Dépendance explicite sur locale.value pour forcer la réévaluation au changement de langue
  void locale.value
  return tm('experience.jobs') as unknown as Experience[]
})
</script>

<template>
  <section class="cv-section experience-section">
    <h3 class="section-title">{{ t('experience.title') }}</h3>

    <div class="timeline">
      <article v-for="(job, index) in jobs" :key="index" class="experience-item">
        <div class="experience-header">
          <div class="company-info">
            <h4 class="position">{{ job.position }}</h4>
            <p class="company">{{ job.company }} · {{ job.location }}</p>
          </div>
          <span class="period">{{ job.period }}</span>
        </div>

        <ul class="tasks-list">
          <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex">
            {{ task }}
          </li>
        </ul>

        <p v-if="job.achievements" class="achievement">
          {{ job.achievements }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background: white;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
  border-radius: 2px;
}

.experience-item {
  position: relative;
  margin-bottom: 2.25rem;
  padding-left: 1.5rem;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: -2.35rem;
  top: 0.45rem;
  width: 10px;
  height: 10px;
  background: var(--color-bg-primary);
  border: 2px solid var(--color-primary);
  border-radius: 50%;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.company-info {
  flex: 1;
}

.position {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin: 0 0 0.2rem 0;
  font-weight: 600;
}

.company {
  color: var(--color-primary);
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
}

.period {
  background: var(--color-bg-tertiary);
  padding: 0.35rem 0.85rem;
  border-radius: 2rem;
  color: var(--color-text-tertiary);
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
}

.tasks-list {
  margin: 0;
  padding-left: 1.25rem;
}

.tasks-list li {
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
}

.tasks-list li::marker {
  color: var(--color-primary);
}

.achievement {
  margin: 0.75rem 0 0 0;
  padding: 0.6rem 0.75rem 0.6rem 1rem;
  border-left: 3px solid var(--color-success);
  color: var(--color-text-primary);
  font-size: 0.9rem;
  font-style: italic;
  background: rgba(16, 185, 129, 0.05);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1rem;
  }

  .experience-item {
    padding-left: 1rem;
    margin-bottom: 1.75rem;
  }

  .experience-item::before {
    width: 8px;
    height: 8px;
    left: -1.85rem;
  }

  .experience-header {
    flex-direction: column;
    gap: 0.4rem;
  }

  .position {
    font-size: 1rem;
  }

  .period {
    align-self: flex-start;
    padding: 0.3rem 0.7rem;
    font-size: 0.825rem;
  }
}

@media (max-width: 480px) {
  .timeline {
    padding-left: 0.75rem;
  }

  .experience-item::before {
    left: -1.6rem;
  }

  .position {
    font-size: 0.95rem;
  }

  .company {
    font-size: 0.875rem;
  }
}
</style>

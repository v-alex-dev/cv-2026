<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { SparklesIcon } from '@heroicons/vue/24/solid'
import type { Experience } from '../types/cv'

const { t, tm } = useI18n()

// Use tm() to get the array
const jobs = tm('experience.jobs') as unknown as Experience[]
</script>

<template>
  <section class="cv-section experience-section">
    <h3 class="section-title">{{ t('experience.title') }}</h3>
    
    <div class="timeline">
      <article
        v-for="(job, index) in jobs"
        :key="index"
        class="experience-item"
      >
        <div class="experience-header">
          <div class="company-info">
            <h4 class="position">{{ job.position }}</h4>
            <p class="company">{{ job.company }} • {{ job.location }}</p>
          </div>
          <span class="period">{{ job.period }}</span>
        </div>
        
        <ul class="tasks-list">
          <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex">
            {{ task }}
          </li>
        </ul>
        
        <div v-if="job.achievements" class="achievement">
          <SparklesIcon class="achievement-icon" />
          <p>{{ job.achievements }}</p>
        </div>
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
  width: 3px;
  background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 2px;
}

.experience-item {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: -2.4rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--color-bg-primary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--color-bg-primary);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.company-info {
  flex: 1;
}

.position {
  font-size: 1.3rem;
  color: var(--color-text-primary);
  margin: 0 0 0.25rem 0;
  font-weight: 600;
}

.company {
  color: var(--color-primary);
  margin: 0;
  font-weight: 500;
}

.period {
  background: var(--color-bg-tertiary);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  white-space: nowrap;
}

.tasks-list {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.tasks-list li {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.tasks-list li::marker {
  color: var(--color-primary);
}

.achievement {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: linear-gradient(135deg, #10B98115 0%, #34D39915 100%);
  border-left: 3px solid var(--color-success);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.achievement-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-success);
  flex-shrink: 0;
}

.achievement p {
  margin: 0;
  color: var(--color-text-primary);
  font-weight: 500;
  font-style: italic;
}

@media (max-width: 1024px) {
  .experience-header {
    gap: 0.75rem;
  }
  
  .position {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline::before {
    width: 2px;
  }
  
  .experience-item {
    padding-left: 1rem;
    margin-bottom: 2rem;
  }
  
  .experience-item::before {
    width: 0.75rem;
    height: 0.75rem;
    left: -1.9rem;
  }
  
  .experience-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .position {
    font-size: 1.1rem;
  }
  
  .period {
    align-self: flex-start;
    padding: 0.4rem 0.875rem;
    font-size: 0.9rem;
  }
  
  .tasks-list {
    padding-left: 1.25rem;
    font-size: 0.95rem;
  }
  
  .achievement {
    padding: 0.875rem;
  }
}

@media (max-width: 480px) {
  .timeline {
    padding-left: 0.75rem;
  }
  
  .experience-item {
    padding-left: 0.75rem;
  }
  
  .experience-item::before {
    left: -1.65rem;
  }
  
  .position {
    font-size: 1rem;
  }
  
  .company {
    font-size: 0.9rem;
  }
  
  .tasks-list {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
  
  .achievement {
    padding: 0.75rem;
    gap: 0.5rem;
  }
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CogIcon, PaintBrushIcon, ChartBarIcon, WrenchScrewdriverIcon, BookOpenIcon } from '@heroicons/vue/24/outline'

const { t, tm } = useI18n()

const skillCategories = [
  { key: 'backend', color: '#FF2D20', icon: CogIcon },
  { key: 'frontend', color: '#F97316', icon: PaintBrushIcon },
  { key: 'data', color: '#0EA5E9', icon: ChartBarIcon },
  { key: 'tools', color: '#71717A', icon: WrenchScrewdriverIcon },
  { key: 'learning', color: '#8B5CF6', icon: BookOpenIcon }
]
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
        <div class="category-header">
          <component :is="category.icon" class="category-icon" :style="{ color: category.color }" />
          <h4 class="category-title">{{ t(`skills.${category.key}.title`) }}</h4>
        </div>
        
        <ul class="skill-items">
          <li
            v-for="(skill, index) in tm(`skills.${category.key}.items`)"
            :key="index"
            class="skill-item"
            :style="{ '--skill-color': category.color }"
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  background: var(--color-bg-primary);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-border);
}

.category-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.category-title {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 1.1rem;
  font-weight: 600;
}

.skill-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-item {
  position: relative;
  padding: 0.5rem 0.75rem 0.5rem 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  transition: all 0.2s ease;
}

.skill-item::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--skill-color);
  font-weight: bold;
}

.skill-item:hover {
  color: var(--color-text-primary);
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .skill-category {
    padding: 1.25rem;
  }
  
  .category-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .skill-category {
    padding: 1rem;
  }
  
  .category-header {
    gap: 0.5rem;
    padding-bottom: 0.75rem;
  }
  
  .category-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .category-title {
    font-size: 0.95rem;
  }
  
  .skill-item {
    font-size: 0.9rem;
    padding: 0.4rem 0.5rem 0.4rem 1.25rem;
  }
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLanguageSwitcher } from '../composables/useLanguageSwitcher'

const { locale } = useI18n()
const { availableLocales } = useLanguageSwitcher()

const switchLanguage = (code: string) => {
  locale.value = code
}
</script>

<template>
  <div class="language-switcher">
    <button
      v-for="lang in availableLocales"
      :key="lang.code"
      :class="['lang-btn', { active: locale === lang.code }]"
      @click="switchLanguage(lang.code)"
      :aria-label="`Switch to ${lang.name}`"
    >
      <span class="flag">{{ lang.flag }}</span>
      <span class="lang-code">{{ lang.code.toUpperCase() }}</span>
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 0;
  margin-bottom: 1.5rem;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.lang-btn:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.lang-btn.active {
  background: rgba(255, 255, 255, 0.95);
  color: var(--color-primary);
  border-color: white;
  font-weight: 600;
}

.flag {
  font-size: 1.2rem;
}

.lang-code {
  font-size: 0.85rem;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .language-switcher {
    margin-bottom: 1.25rem;
  }
}

@media (max-width: 768px) {
  .language-switcher {
    margin-bottom: 1rem;
    gap: 0.4rem;
  }
  
  .lang-btn {
    padding: 0.4rem 0.75rem;
  }
  
  .lang-code {
    display: none;
  }
  
  .flag {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .language-switcher {
    margin-bottom: 0.75rem;
    gap: 0.3rem;
  }
  
  .lang-btn {
    padding: 0.375rem 0.625rem;
    border-width: 1.5px;
  }
  
  .flag {
    font-size: 1rem;
  }
}
</style>

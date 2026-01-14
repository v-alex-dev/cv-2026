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
      <span :class="['flag', `flag-${lang.code}`]"></span>
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
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.flag::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.flag-fr::before {
  background: linear-gradient(90deg, #002395 33.33%, #FFFFFF 33.33% 66.67%, #ED2939 66.67%);
}

.flag-en::before {
  background: 
    linear-gradient(90deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(0deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(45deg, transparent 46%, white 46% 54%, transparent 54%),
    linear-gradient(-45deg, transparent 46%, white 46% 54%, transparent 54%),
    linear-gradient(0deg, #012169 0%, #012169 100%);
}

.flag-en::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: 
    linear-gradient(45deg, transparent 40%, #C8102E 40% 50%, transparent 50%),
    linear-gradient(-45deg, transparent 40%, #C8102E 40% 50%, transparent 50%),
    linear-gradient(90deg, transparent 45%, #C8102E 45% 55%, transparent 55%),
    linear-gradient(0deg, transparent 45%, #C8102E 45% 55%, transparent 55%);
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
    width: 1.2rem;
    height: 1.2rem;
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
    width: 1.1rem;
    height: 1.1rem;
  }
}
</style>

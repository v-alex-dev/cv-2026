<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, TruckIcon } from '@heroicons/vue/24/outline'

const { t } = useI18n()
</script>

<template>
  <section class="cv-section contact-section">
    <h3 class="section-title">{{ t('contact.title') }}</h3>
    <div class="contact-grid">
      <div class="contact-item">
        <MapPinIcon class="icon" />
        <div>
          <strong>{{ t('contact.title') }}</strong>
          <p>{{ t('contact.address') }}</p>
        </div>
      </div>
      
      <div class="contact-item">
        <PhoneIcon class="icon" />
        <div>
          <strong>{{ t('contact.phone').split(':')[0] }}</strong>
          <p>{{ t('contact.phone').split(':')[1] || t('contact.phone') }}</p>
        </div>
      </div>
      
      <div class="contact-item">
        <EnvelopeIcon class="icon" />
        <div>
          <strong>Email</strong>
          <p><a :href="`mailto:${t('contact.email')}`">{{ t('contact.email') }}</a></p>
        </div>
      </div>
      
      <div class="contact-item">
        <TruckIcon class="icon" />
        <div>
          <strong>{{ t('contact.license').split(',')[0] }}</strong>
          <p>{{ t('contact.license') }}</p>
        </div>
      </div>
    </div>
    
    <div class="languages">
      <h4>{{ t('contact.languages.title') }}</h4>
      <ul>
        <li>{{ t('contact.languages.french') }}</li>
        <li>{{ t('contact.languages.english') }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--color-bg-secondary);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-bg-primary);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.contact-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-primary);
  flex-shrink: 0;
}

.contact-item strong {
  display: block;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.contact-item p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.contact-item a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: var(--color-hover);
  text-decoration: underline;
}

.languages {
  background: var(--color-bg-primary);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
}

.languages h4 {
  margin: 0 0 1rem 0;
  color: var(--color-text-primary);
}

.languages ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.languages li {
  color: var(--color-text-secondary);
  padding: 0.5rem 1rem;
  background: var(--color-bg-tertiary);
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.languages li:hover {
  background: var(--color-primary-alpha);
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-item {
    padding: 0.875rem;
  }
  
  .languages {
    padding: 1.25rem;
  }
  
  .languages ul {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-item {
    padding: 0.75rem;
    gap: 0.75rem;
  }
  
  .languages {
    padding: 1rem;
  }
  
  .languages li {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
}
</style>

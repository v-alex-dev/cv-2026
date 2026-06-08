<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="cv-section contact-section">
    <h3 class="section-title">{{ t('contact.title') }}</h3>

    <div class="contact-grid">
      <div class="contact-item">
        <span class="contact-label">Localisation</span>
        <span class="contact-value">{{ t('contact.address') }}</span>
      </div>

      <div class="contact-item">
        <span class="contact-label">Téléphone</span>
        <span class="contact-value">{{ t('contact.phone') }}</span>
      </div>

      <div class="contact-item">
        <span class="contact-label">Email</span>
        <a :href="`mailto:${t('contact.email')}`" class="contact-link">
          {{ t('contact.email') }}
        </a>
      </div>

      <div class="contact-item">
        <span class="contact-label">Mobilité</span>
        <span class="contact-value">{{ t('contact.license') }}</span>
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.875rem 1rem;
  background: var(--color-bg-primary);
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease;
}

.contact-item:hover {
  border-color: var(--color-primary);
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-tertiary);
}

.contact-value {
  font-size: 0.9rem;
  color: var(--color-text-primary);
}

.contact-link {
  font-size: 0.9rem;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  text-decoration: underline;
}

.languages {
  background: var(--color-bg-primary);
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
}

.languages h4 {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-tertiary);
  margin: 0 0 0.625rem 0;
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
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  position: relative;
  padding-left: 0.75rem;
}

.languages li::before {
  content: '/';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media print {
  .contact-section {
    background: white !important;
  }

  .contact-item,
  .languages {
    border: none !important;
    background: white !important;
    padding: 0 !important;
  }

  .contact-item:hover {
    border-color: transparent !important;
  }
}
</style>

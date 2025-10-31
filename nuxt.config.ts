export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'nuxt-auth-utils',
    '@nuxtjs/seo'
  ],
  devtools: { enabled: true },

  site: {
    url: 'https://phoebe.lsgbin.com/',
    name: 'Phoebe Gallery',
    description: 'The Gallery of Phoebe, for my girl.',
    defaultLocale: 'en',
    indexable: true,
    env: 'production',
    trailingSlash: false
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark' // Default color
  },

  ui: {
    theme: {
      colors: ['gray', 'red']
    }
  },

  experimental: {
    viewTransition: true
  },

<<<<<<< HEAD
  compatibilityDate: '2025-10-30',
=======
  compatibilityDate: '2024-07-30',
>>>>>>> 84c4a67a23cbfd75c9ac34af4cbc79f1a1a63287

  hub: {
    blob: true
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  }
})

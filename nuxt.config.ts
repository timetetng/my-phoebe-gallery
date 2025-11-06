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
    url: 'https://菲比.我爱你/',
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

  compatibilityDate: '2025-10-30',

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

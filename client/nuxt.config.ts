// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css', integrity: 'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor', crossorigin: 'anonymous' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2', crossorigin: 'anonymous' }
      ],
      title: 'Nón Lá Tourist',
    
    }
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3600'
    }
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/main.css'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ['stores', 'services'],
  },
 
  ssr: false
})

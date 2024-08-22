// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth', '@unocss/nuxt', '@nuxt/ui'],
  runtimeConfig: {
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    secretKey: process.env.SECRET_KEY,
    tursoUrl: process.env.TURSO_URL,
    tursoSecret: process.env.TURSO_SECRET,
    authOrigin: process.env.NODE_ENV === 'production' ? 'https://paysha.app' : 'localhost:3000',
  },
  compatibilityDate: '2024-08-19',
  auth: {
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true,
    },
  },
  shadcn: {
    prefix: 'cn',
  },
})

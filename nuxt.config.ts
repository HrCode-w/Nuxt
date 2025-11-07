// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt 4 项目',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'dom01 是一个基于 Nuxt 3 的项目' },
      ],
      link: [

        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' },
      ],
    },
  },
  hooks: {
    // 当 Nuxt 关闭时触发
    "close": () => {
      // 
      console.log('Nuxt 关闭')
    },
    // 当 Nuxt 准备就绪时触发
    'ready': () => {
      console.warn('Nuxt 准备就绪')
    },
  },
  compatibilityDate: '2025-07-15',// 2025-07-15 之前的版本不支持 Nuxt 3.11 及以上版本
  devtools: { enabled: true },// 开启 devtools 调试工具
  $production: {
    devtools: { enabled: false },
    routeRules: {
      '/**': { isr: true, cors: true },// 开启全站 ISR 缓存 
    },

  },// 生产环境配置
  $development: {
    // 开发环境配置
    devtools: { enabled: true },

  },
  $env: {
    stagine: {
      logLevel: 'info',
    },
  },
  vite: {
    // Vite 配置

  },
  runtimeConfig: {
    // 私有配置，只有服务器端可以访问
    apiSecret: '123',
    // 公开配置，客户端和服务器端都可以访问
    public: {
      apiBase: '/api',
      name: 'dom01',
    },
  },
})

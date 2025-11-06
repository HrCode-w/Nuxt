// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',// 2025-07-15 之前的版本不支持 Nuxt 3.11 及以上版本
  devtools: { enabled: true },// 开启 devtools 调试工具
  $production: {
    devtools: { enabled: false },
    routeRules: {
      '/**': { isr: true ,cors: true},// 开启全站 ISR 缓存 
    },

  },// 生产环境配置
  $development: {
    // 开发环境配置
    devtools: { enabled: true },

  },
  $env: {
    stagine: {
      logLevel:'info',
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

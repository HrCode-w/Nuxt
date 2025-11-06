<template>
  <div>
    <nuxt-layout >
      <NuxtPage />
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
console.log('App Config:', appConfig)
console.log('Runtime Config:', runtimeConfig)
</script>

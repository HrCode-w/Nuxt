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
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}</style>

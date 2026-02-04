<template>
  <div>
    <NuxtLoadingIndicator />
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
import { Analytics } from "@vercel/analytics/nuxt";
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<template>
    <div class="alert alert-warning" role="alert">
        {{ message }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    message: {
        type: String,
        default: '默认警告信息',
    },
    type: {
        type: String,
        default: 'warning',
    },
})
</script>
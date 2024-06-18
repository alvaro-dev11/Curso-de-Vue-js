<script setup>
import { useWheater } from '@/composables/useWheater'
import { onMounted } from 'vue'
import { useWheaterStore } from '@/stores/wheaterStore'

const wheaterStore = useWheaterStore()

onMounted(() => {
  useWheater()
})
</script>

<template>
  <span>La temperatura actual es: {{ wheaterStore.temperatura }} °</span>
</template>

<style scoped></style>

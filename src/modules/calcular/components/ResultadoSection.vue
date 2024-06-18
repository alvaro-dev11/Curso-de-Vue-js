<script setup>
import { defineProps } from 'vue'

const props = defineProps(['resultado'])
</script>

<template>
  <section class="resultado">
    {{ props.resultado }}
  </section>
</template>

<style scoped>
.resultado {
  background-color: #1e3a8a;
  color: white;
}
</style>

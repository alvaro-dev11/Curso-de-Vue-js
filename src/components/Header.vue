<script setup>
import Wheater from './Wheater.vue'
</script>

<template>
  <header class="header">
    <h3>La temperatura actual es:</h3>
    <Wheater />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: calc(100% - 280px);
  margin-left: auto;
  background-color: #1e293b;
  color: #f1f5f9;
}
h3 {
  margin: 0;
}
</style>

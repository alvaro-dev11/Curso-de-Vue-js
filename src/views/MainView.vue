<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import { ref } from 'vue'

const texto = ref('')
</script>

<template>
  <Sidebar />

  <Header :mensaje="texto" />

  <main class="container">
    <section class="content">
      <input type="text" v-model="texto" />

      {{ texto }}

      <router-view />
    </section>
  </main>
</template>

<style>
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
.content {
  padding: 50px 20px;
  margin-left: 170px;
}
</style>

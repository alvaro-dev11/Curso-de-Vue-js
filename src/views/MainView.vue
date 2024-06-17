<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <main class="container">
    <Sidebar />
    <section class="content">
      <router-view />
    </section>
  </main>
</template>

<style>
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>

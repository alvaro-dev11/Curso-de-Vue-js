<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <Sidebar />

  <Header />

  <main class="container">
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
}
.content {
  padding: 50px 20px;
  margin-left: 170px;
}
</style>

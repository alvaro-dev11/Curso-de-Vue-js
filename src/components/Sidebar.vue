<script setup></script>

<template>
  <aside class="sidebar">
    <h2>Barra lateral</h2>

    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>

      <li>
        <router-link to="/tareas">Lista de tareas</router-link>
      </li>
    </ul>
  </aside>
</template>

<style>
.sidebar {
  width: 200px;
  background-color: #0f172a;
  color: #f1f5f9;
  padding: 20px;
}
</style>

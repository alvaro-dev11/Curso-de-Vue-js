<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore'
// import { ref, watch } from 'vue'

// Ejecutando el registrarStore
const registrarStore = useRegistrarStore()

/*
Ya no es necesario usar todo este codigo para mostrar en pantalla los estados de nombre y correo ya que dichas variables ya son reactivas dentro del useRegistrarStore

const nombre = ref(registrarStore.nombre.value)
const correo = ref(registrarStore.correo.value)

watch(
  () => registrarStore.nombre,
  (newValue) => {
    nombre.value = newValue
  }
)

watch(
  () => registrarStore.correo,
  (newValue) => {
    correo.value = newValue
  }
)
  */
</script>

<template>
  <aside class="sidebar">
    <h2>Bienvenido(a)</h2>

    <!-- Mostrando los estados guardados de nombre y correo -->
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Correo: {{ registrarStore.correo }}</h3>

    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>

      <li>
        <router-link to="/tareas">Lista de tareas</router-link>
      </li>

      <li>
        <router-link to="/registrar">Registrar usuario</router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #0f172a;
  color: #f1f5f9;
  padding: 20px;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>

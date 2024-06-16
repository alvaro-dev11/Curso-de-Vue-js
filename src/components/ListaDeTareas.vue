<script setup>
import { ref, defineModel } from 'vue'

// Para crear un variable reactiva de las tareas
const tareas = ref([])

// Para crear un variable reactiva de la nueva tarea
const nuevaTarea = defineModel('nuevaTarea', { required: true })

// Para guardar una nueva tarea
const agregarTarea = () => {
  // Para agregar la nueva tarea al arreglo tareas
  tareas.value.push(nuevaTarea.value)

  // Para limpiar el valor del input
  nuevaTarea.value = ''
}
</script>

<template>
  <div>
    <h1>Lista de tareas</h1>
    <p>{{ nuevaTarea }}</p>

    <!-- 
        Sincronizamos la nueva tarea con el input y le damos el evento keyup para guardar la nueva tarea
     -->
    <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea" />

    <ul>
      <!-- Recorremos el arreglo tareas, le damos un indice y mostramos la nueva tarea en la lista -->
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
      </li>
    </ul>
  </div>
</template>

<style></style>

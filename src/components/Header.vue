<script setup>
import Wheater from './Wheater.vue'
import { defineProps, ref, watch } from 'vue'

// Para definir una prop
const props = defineProps(['mensaje'])

// Para almacenar la prop en una variable reactiva que vamos a recibir del componente padre
const mensajeRecibido = ref(props.mensaje)

// Para actualizar el componente con la variable reactiva que recibimos del componente padre
watch(
  () => props.mensaje,
  (newValue) => {
    mensajeRecibido.value = newValue
  }
)
</script>

<template>
  <header class="header">{{ mensajeRecibido }} <Wheater /></header>
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

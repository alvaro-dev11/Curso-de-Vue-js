<script setup>
import { ref, computed } from 'vue'

const contador = ref(0)

const incrementar = () => {
  contador.value++
}

const decrementar = () => {
  contador.value--
}

const resetear = () => {
  contador.value = 0
}

const cambiarColor = computed(() => {
  if (contador.value > 0) {
    return 'green'
  } else if (contador.value < 0) {
    return 'red'
  } else {
    return 'black'
  }
})
</script>

<template>
  <h1>Contador</h1>
  <p :class="cambiarColor">{{ contador }}</p>

  <button @click="incrementar">Incrementar</button>

  <button @click="decrementar">Decrementar</button>

  <button @click="resetear">Resetear</button>
</template>

<style scoped>
.green {
  color: green;
}

.red {
  color: red;
}

.black {
  color: black;
}
</style>

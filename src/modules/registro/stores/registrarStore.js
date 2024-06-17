import { defineStore } from 'pinia'
import { ref } from 'vue'

// Para guardar el estado de nombre y correo
export const useRegistrarStore = defineStore('registrar', () => {
  // Definiendo las variables reactivas para nombre y correo
  const nombre = ref('')
  const correo = ref('')
  
  // Para guardar el valor de las variables reactivas en los valores de los inputs del formulario
  const guardarRegistro = (nombreFormulario, correoFormulario) => {
    nombre.value = nombreFormulario
    correo.value = correoFormulario
  }
  return { nombre, correo, guardarRegistro }
})

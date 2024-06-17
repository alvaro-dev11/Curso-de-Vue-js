// Para almacenar los datos que vengan de la API en store

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWheaterStore = defineStore('wheater', () => {
  const temperatura = ref(0)
  const setTemperatura = (temperaturaAPI) => {
    temperatura.value = temperaturaAPI
  }
  return { temperatura, setTemperatura }
})

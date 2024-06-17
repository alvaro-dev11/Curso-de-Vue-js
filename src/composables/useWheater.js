// Para guardar la temperatura que viene de la API en el store
import { useWheaterStore } from '@/stores/wheaterStore'
import { getTemperatura } from '@/helpers/getWheater'

export const useWheater = async () => {
  // Reciviendo la temperatura de la API
  const temperatura = await getTemperatura()
  // Guardando en el store
  const wheaterStore = useWheaterStore()
  wheaterStore.temperatura = temperatura
}

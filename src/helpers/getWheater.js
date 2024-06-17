// Realizar petición a una API

// Página de la API: https://open-meteo.com/en/docs

// URL API: https://api.open-meteo.com/v1/forecast?latitude=-12.0432&longitude=-77.0282&hourly=temperature_2m&timezone=auto

import axios from 'axios'

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-12.0432&longitude=-77.0282&hourly=temperature_2m&timezone=auto'

export const getTemperatura = async () => {
  const res = await axios.get(API_URL)
  const nuevaTemperatura = res.data.hourly.temperature_2m[0]
  return nuevaTemperatura
}

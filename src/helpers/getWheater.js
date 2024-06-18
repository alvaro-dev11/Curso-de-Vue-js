// Realizar petición a una API

// Página de la API: https://open-meteo.com/en/docs

// URL API: https://api.open-meteo.com/v1/forecast?latitude=-12.0432&longitude=-77.0282&current=temperature_2m&timezone=auto&forecast_days=1

import axios from 'axios'

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-12.0432&longitude=-77.0282&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperatura = async () => {
  const res = await axios.get(API_URL)
  const nuevaTemperatura = res.data.current.temperature_2m
  return nuevaTemperatura
}

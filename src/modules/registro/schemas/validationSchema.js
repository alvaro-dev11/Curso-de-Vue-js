// Importando todos los metodos del modulo yup
import * as yup from 'yup'

// Exportando el esquema de validación
export const schema = yup.object({
  nombre: yup.string().required(),
  correo: yup.string().email().required()
})

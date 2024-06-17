<script setup>
// Validación del formulario
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema.js'

// Guardar datos en el estado
import { useRegistrarStore } from '../stores/registrarStore.js'
import { defineModel } from 'vue'

// Ejecutando el registrarStore
const registrarStore = useRegistrarStore()

// Definiendo las variables reactivas para nombre y correo
const nombre = defineModel('nombre')
const correo = defineModel('correo')

// Para enviar el formulario
const onSubmit = () => {
  // Para ejecutar la función guardarRegistro y asignar los nuevos valores nombre y correo en el estado
  registrarStore.guardarRegistro(nombre.value, correo.value)
  console.log('Formulario enviado')
}
</script>

<template>
  <section>
    <h2>Formulario de registro</h2>

    <!-- Implementando el esquema de validación en el formulario con la directiva :validation-schema y asignando el evento submit para enviar el formulario
      -->
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>

        <Field
          type="text"
          v-model="nombre"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
        ></Field>
        <br />

        <ErrorMessage name="nombre" />
      </div>

      <div class="form">
        <label for="correo">Correo:</label>

        <Field
          type="email"
          v-model="correo"
          id="correo"
          name="correo"
          placeholder="Ingrese su correo"
        ></Field>
        <br />

        <ErrorMessage name="correo" />
      </div>

      <button type="submit">Registrar</button>
    </Form>
  </section>
</template>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>

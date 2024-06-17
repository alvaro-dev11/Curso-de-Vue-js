<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema.js'
import { useRegistrarStore } from '../stores/registrarStore.js'
import { ref, defineModel } from 'vue'

const registrarStore = useRegistrarStore()

const nombre = defineModel('nombre')
const correo = defineModel('correo')

const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, correo.value)
  console.log('Formulario enviado')
}
</script>

<template>
  <section>
    <h2>Formulario de registro</h2>

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

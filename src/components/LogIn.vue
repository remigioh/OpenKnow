<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
   <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
   
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Password"
      required
      type="password"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Iniciar sesión
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="$router.push('/signup')"
    link>
      Registrarme
    </v-btn>
    <p></p>
    <h4>Sino se tinen cuenta de usuario de Open Know, por favor de clic en el boton Registrarme para crear una cuenta.</h4>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Password es requerido',
        v => (v && v.length <= 10) || 'Password must be unless 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style>

</style>
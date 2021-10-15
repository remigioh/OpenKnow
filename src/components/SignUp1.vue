<template>
  <form @submit.prevent="agregarUser()">
    <v-text-field
      v-model="user.nombre"
      :error-messages="nameErrors"
      :counter="10"
      label="Nombre"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="user.email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="user.password"
      :error-messages="passwordErrors"
      :counter="10"
      label="Password"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-select
      v-model="user.pais"
      :items="items"
      :error-messages="selectErrors"
      label="Pais"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Esta de acuerdo con la politica de tratamiento de datos?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn
      class="mr-4"
    >
      Crear cuenta de usuario
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(30) },
      password: { required, minLength: minLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      users: [], 
       user: {}, 
       agregar: true, 
      name: '', 
      email: '',
      select: null,
      items: [
        'Argentina',
        'Bolivia',
        'Brasil',
        'Canada',
        'Colombia',
        'Chile',
        'Costarica',
        'Cuba',
        'Ecuador',
        'España',
        'Guatemala',
        'Guayana',
        'Honduras',
        'Mexico',
        'Nicaragua',
        'Panama',
        'Paraguay',
        'Peru',
        'Salvador',
        'USA',
        'Venezuela',
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Pais is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.maxLength && errors.push('Password must be at least 10 characters long')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      agregarUser(){ 
           this.axios.post('nuevo-user', this.user) 
           .then(res => { 
             // Agrega al inicio de nuestro array users 
             //this.users.unshift(res.data); 
             this.users.push(res.data);
             this.user.nombre="";
             this.user.email="";
             this.user.password="";
             this.user.pais="";
             // Alerta de mensaje 
             this.showAlert(); 
             this.mensaje.texto = 'Notas Agregada!' 
             this.mensaje.color = 'success'; 
             }) .catch( e => { 
               console.log(e.response.data.error.errors.nombre.message); 
               // Alerta de mensaje 
               this.showAlert(); 
               this.mensaje.color = 'danger'; 
               this.mensaje.texto = e.response.data.error.errors.nombre.message; 
               }) 
               this.notas = {} 
               }, 
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style>

</style>
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
      type="email"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="user.password"
      :error-messages="passwordErrors"
      :counter="10"
      label="Password"
      type="password"
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
      v-model="user.data_policy"
      :error-messages="checkboxErrors"
      label="Esta de acuerdo con la politica de tratamiento de datos?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" type="submit">Crear cuenta de usuario</v-btn>
    <v-btn @click="clear">
      Borrar contenido del formulario
    </v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(50) },
      password: { required, minLength: minLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data () {
      return {
        users:[],
      user: {nombre:"", email:"", password:"", pais:"", data_policy:""}, 
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
        'Haiti',
        'Honduras',
        'Mexico',
        'Nicaragua',
        'Panama',
        'Paraguay',
        'Peru',
        'Puerto Rico',
        'Rep. Dominicana',
        'Salvador',
        'USA',
        'Venezuela',
      ],
      checkbox: false,
      };
    },

    methods: {
      agregarUser(){ 
        //axios.post('http://localhost:3000/api/nuevo-user',
           this.axios.post('/nuevo-user', this.user) 
           .then(res => { 
             // Agrega al inicio de nuestro array users 
             //this.users.unshift(res.data); 
             this.users.push(res.data);
             this.user.nombre="";
             this.user.email="";
             this.user.password="";
            this.user.pais="";
            this.user.data_policy="";
             alert("Cuenta de usuario creada exitoxamente");
             }) .catch( e => { 
               console.log(e.response); 
               }); 
               }, 
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.user.nombre="";
             this.user.email="";
             this.user.password="";
            this.user.pais="";
            this.user.data_policy="";
      },
    },
  }
</script>

<style>

</style>
<template>
  <form @submit.prevent="agregarFile()">
    <h1>Subir archivo de un recurso al repositorio</h1>
    <v-text-field
      v-model="file.titulo"
      :error-messages="nameErrors"
      :counter="10"
      label="Titulo"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

<v-text-field
v-model="file.autor"
:error-messages="autorErrors"
            label="Autor"
            required
            placeholder="Placeholder"
          ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Area del saber"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-file-input
    v-model="files"
    :error-messages="filesErrors"
    placeholder="Cargue el archivo a agregar"
    label="Archivo a agregar"
    multiple
    prepend-icon="mdi-paperclip">
    <template v-slot:selection="{ text }">
      <v-chip
        small
        label
        color="primary"
      >
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>   
        
           <br />  <v-btn class="mr-4" type="submit">Agregar</v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      autor:{ required },
      select: { required },
      files:{ required },
    },

    data: () => ({
     file: {titulo:"", autor:"", cat_id:"", user_id:"", path:""},  
      name: '',
      autor:'',
      select: null,
      items: [
        'Administración',
        'Artes',
        'Biologia',
        'Derecho',
        'Diseño',
        'Economía',
        'Electrónica',
        'Física',
        'Historia',
        'Espiritualidad',
        'Filosofia',
        'Informática',
        'Ingenierias',
        'Literatura',
        'Matemáticas',
        'Medicina',
        'Pedadgogía',
        'Política',
        'Psicología',
        'Química',
        'Salud'
      ],
      files: [],
    }),

    computed: {
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Area del saber is requerida')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('El titulo del archivo is required.')
        return errors
      },
      autorErrors () {
        const errors = []
        if (!this.$v.autor.$dirty) return errors
        !this.$v.autor.required && errors.push('El autor del archivo is required.')
        return errors
      },
      filesErrors () {
        const errors = []
        if (!this.$v.files.$dirty) return errors
        !this.$v.files.required && errors.push('El archivo a agregar is required.')
        return errors
      },
    },

    methods: {
agregarFile(){ 
           this.axios.post('/nuevo-file', this.file) 
           .then(res => { 
             this.files.push(res.data)
             this.file.titulo="";
             this.file.autor="";
             this.file.cat_id="";
             this.file.user_id="";
             this.file.path="";
             }) .catch( e => { 
               console.log(e.response); 
               }); 
               }, 

      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.autor = ''
        this.select = null
        this.files = null
      },
    },
  }
</script>

<style>

</style>
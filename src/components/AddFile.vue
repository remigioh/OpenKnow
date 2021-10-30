<template>
  <form @submit.prevent="agregarFile()">
    <h1>Agregar un recurso al repositorio</h1>
    <v-text-field
      v-model="file.titulo"
      :counter="10"
      label="Titulo"
      placeholder="Escriba el titulo del recurso a agregar"
      required
    ></v-text-field>

<v-text-field
v-model="file.autor"
            label="Autor"
            required
            placeholder="Escriba nombre y apellido del autor"
          ></v-text-field>

<v-select
      v-model="file.categoria"
      :items="items"
      label="Area del saber"
      placeholder="Selecciones área del saber"
      required
    ></v-select>
    <!--
          <v-text-field
v-model="file.user_id"
            label="user_id"
            required
            placeholder="Placeholder"
          >61660156e196883e68df6796</v-text-field>

    <v-file-input
    v-model="file.path"
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
        -->

        <v-text-field
v-model="file.path"
            label="Archivo"
            required
            placeholder="Escriba la ruta y el nombre completo del archivo"
          ></v-text-field>
           <br />  <v-btn class="mr-4" type="submit">Agregar</v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
export default {
    data: () => ({
     file: {titulo:"", autor:"", categoria:"", user_id:"61660156e196883e68df6796", path:""},  
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


    methods: {
agregarFile(){ 
           this.axios.post('/nuevo-file', this.file) 
           .then(res => { 
             this.files.push(res.data)
             this.file.titulo="";
             this.file.autor="";
             this.file.categoria="";
             this.file.user_id="";
             this.file.path="";
             alert("Archivo insertado a la base de datos correctamente.");
             }) .catch( e => { 
               console.log(e.response); 
               }); 
               }, 

      clear () {
        this.$v.$reset();
        this.file.titulo = '';
        this.file.autor = '';
        this.file.categoria = null;
        this.file.path = "";
      },
    },
  }
</script>

<style>

</style>
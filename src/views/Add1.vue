<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-8 mt-3">
          <h4>Agregar un archivo al repositorio</h4>

          <form
            action=""
            method="POST"
            enctype="multipart/form-data"
          >

          <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Titulo"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Autor"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :categorias="categorias"
      :rules="[v => !!v || 'Item is required']"
      label="Seleccione area del saber"
      required
    ></v-select>
    
    <v-file-input
    v-model="files"
    placeholder="Agrege su archivo"
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
        
           <br />  <v-btn class="mr-4" @click="submit">Agregar</v-btn>
          </form>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-12">
          <div class="preview-images"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
data: () => ({
    valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Titulo is required',
        ],
       select: null,
      categorias:[
          'Biología',
          'Filosofía',
          'Informática',
          'Psicología',
          'Ingenierias',
          'Historia',
          'Pedagogía',
          'Artes',
          'Medicina',
          'Economía',
          'Química',
          'Espiritualidad',
          'Física',
          'Salud',
          'Matemáticas',
          'Derecho',
          'Electrónica',
          'Administración',
          'Diseño',
          'Politica',
          'Literatura',
          ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    }
}
</script>

<style>

</style>
<template>
<div>
<v-data-table
    :headers="headers"
    :items="files"
    sort-by="autor"
    class="elevation-1"
    v-if="search"
  >
  
    <template v-slot:top>
      <v-toolbar
        flat
      >
      <v-toolbar-title v-if="cat"><h2>Listado de libros de {{ file.autor }}</h2></v-toolbar-title>
      <v-toolbar-title v-if="!cat"><h2>Listado de libros de {{ file.cat_id }}</h2></v-toolbar-title> 
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog" 
          max-width="1000px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on">
              Agregar archivo nuevo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.titulo"
                      label="Titulo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.autor"
                      label="Autor"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.path"
                      label="Archivo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.cat_id"
                      label="Categoria"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Esta seguro que desea borrar este archivo?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    v-if="!search"
  >
  <h1>Buscar archivos de recursos por autor, titulo o categoria</h1>
  <p></p>
    <h4>Digite solo en un campo</h4>

    <v-text-field
      v-model="file.autor"
      :counter="10"
      :rules="autorRules"
      label="Buscar archivo por autor del recurso"
      required
    ></v-text-field>

<v-text-field
      v-model="file.titulo"
      :error-messages="nameErrors"
      :counter="10"
      :rules="tituloRules"
      label="Buscar archivo por titulo del recurso"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Buscar recurso por area del saber"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
       @click="$router.push('/search')"
    >Buscar archivo
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
     Borrar contenido del formulario
    </v-btn>
  </v-form>
</div>
</template>

<script>
  export default {
    data: () => ({
     file: {titulo:"", autor:"", cat_id:"", user_id:"", path:""},
      valid: true,
      search:false,
      cat:false,
      tituloRules: [
        v => !!v || 'Titulo del recurso es requerido',
      ],
      autorRules: [
        v => !!v || 'Autor del recurso es requerido',
      ],
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

dialog: false,
      dialogDelete: false,
      headers: [
          {
            text: 'Titulo',
            align: 'start',
            filterable: false,
            value: 'titulo',
          },
          { text: 'Autor', value: 'autor' },
          { text: 'Archivo', value: 'path' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        files: [],
        categoria: {}, 
        editedIndex: -1,
        editedItem: {
        _id: '',
        titulo: '',
        autor: '',
        path: '',
        categoria:'',
      },
      defaultItem: {
        _id: '',
        titulo: '',
        autor: '',
        path: '',
        categoria:'',
      },

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
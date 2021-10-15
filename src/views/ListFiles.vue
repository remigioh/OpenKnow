<template>
<v-data-table
    :headers="headers"
    :items="files"
    sort-by="autor"
    class="elevation-1"
  >
  
    <template v-slot:top>
      <v-toolbar
        flat
      >
      <v-toolbar-title><h2>Listado de libros de Fenomenologia {{ categoria }}</h2></v-toolbar-title> 
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
                  ><v-text-field
                      v-model="editedItem._id"
                      label="File_id"
                    ></v-text-field>
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
</template>

<script>

  export default {
    data: () => ({
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

computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Archivo nuevo' : 'Editar archivo'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

   created(){ // se invocan a los metodos de listado
        this.listarFile();
        this.buscarCat();
        },
  
methods: { 
        listarFile(){ 
            this.axios.get('/file')
            .then((response) => {
                 // console.log(response.data) 
                 this.files = response.data; 
                 })
                 .catch((e)=>{ 
                     console.log('error' + e.response);
                    })
                },

buscarCat(){ 
            this.axios.get('/cat/:nombre')
            .then((response) => {
                 // console.log(response.data) 
                 this.categoria = response.data; 
                 })
                 .catch((e)=>{ 
                     console.log('error' + e.response);
                    })
                },


editItem (item) {
        this.editedIndex = this.files.indexOf(item)
        this.editedItem = Object.assign({}, item)
     /*   this.axios.put(`/file/${editedItem._id}`, editedItem)
            .then(res=>{
              // const index= this.item.findIndex(n=> n._id===res.data._id);
                this.editedItem.titulo=res.data.titulo;
                this.editedItem.autor=res.data.autor;
                this.editedItem.path=res.data.path;
            })
            .catch(e=>{

                console.log(e.response);
            })  */
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.files.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.files.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.files[this.editedIndex], this.editedItem)
        } else {
          this.files.push(this.editedItem)
        }
        this.close()
      },
    }, 
        };
</script>

<style>

</style>
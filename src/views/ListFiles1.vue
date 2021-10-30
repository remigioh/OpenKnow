<template>
<v-data-table
    :headers="headers"
    :items="files"
    sort-by="autor"
    class="elevation-1"
  >
    <template v-slot:top>
      <h1>Listado de recursos</h1>
      <v-toolbar flat>
        

        <v-spacer></v-spacer>
 
         <v-dialog v-model="dialog" max-width="1000px">
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
                      v-model="editedFile.titulo"
                      label="Titulo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedFile.autor"
                      label="Autor"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedFile.path"
                      label="Archivo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedFile.categoria"
                      label="Categoria"
                    ></v-text-field>
                  </v-col>
                 <!-- 
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  ><v-text-field
                      v-model="editedFile._id"
                      label="File_id"
                    ></v-text-field>
                  </v-col>  -->
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
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="editFile(editedFile)">Actualizar</v-btn>
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
      <v-icon small class="mr-2" @click="editFile(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
     <!--
    <template v-slot:no-data>
     <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template> -->
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
          { text: 'Categoria', value: 'categoria' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        files: [],
        categoria: {}, 
        editedIndex: -1,
        editedFile: {
        _id: '',
        titulo: '',
        autor: '',
        path: '',
        categoria:'',
      },
      defaultFile: {
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


editFile(item) {
  
        this.editedIndex = this.files.indexOf(item)
        this.editedFile = Object.assign({}, item)
     this.axios.put(`/actualizar-file/${item._id}`, item)
            .then(res=>{
              const index= this.files.findIndex(n=> n._id===res.data._id);
                this.files[index].titulo=res.data.titulo;
                this.files[index].autor=res.data.autor;
                this.files[index].path=res.data.path;
            })
            .catch(e=>{

                console.log(e.response);
            })
            this.dialog = true;
      },

      deleteItem (item) {
        this.editedIndex = this.files.indexOf(item)
        this.editedFile = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.files.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedFile = Object.assign({}, this.defaultFile)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedFile = Object.assign({}, this.defaultFile)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.files[this.editedIndex], this.editedFile)
        } else {
          this.files.push(this.editedFile)
        }
        this.close()
      },
    }, 
        };
</script>

<style>

</style>
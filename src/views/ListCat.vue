<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="categorias"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>

  export default {
    data () {
      return {
        categorias: [],  
        search: '',
        headers: [
            { text: 'Id', value: '_id' },
          {
            text: 'Nombre',
            align: 'start',
            filterable: false,
            value: 'nombre',
          },
          { text: 'Color', value: 'color' },
          { text: 'Enlace', value: 'page' },
        ],
    };
  },
  created(){ 
        this.listarCat(); 
        },
methods: { 
        listarCat(){ 
            this.axios.get('/cat')
            .then((response) => {
                 // console.log(response.data) 
                 this.categorias = response.data; 
                 })
                 .catch((e)=>{ 
                     console.log('error' + e.response);
                    })
                }
            }, 
        };
</script>

<style>

</style>
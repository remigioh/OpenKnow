<template>
<v-app>
  
    <menu-bar></menu-bar>
     

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>

</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  //name: "App",

  components: {
    MenuBar
  },
};


/*
export default {
    data: () => ({ 
      drawer: null 
      }),
  };
  */
</script>
<style>
h1 {
    margin-top:-10px;
    text-align: center;
    color:white; 
		font-family:tahoma;
    background-color: #0987e3;
    padding: 15px;
        }

.categorias {
    margin-top:5px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3px;
    grid-column-gap: 3px;
    }

button {
  height: 102px;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  font-size: 2rem;
  color: white;
  text-shadow: 0 1px rgba(255,255,255,.4);
}

button:hover {
  background-color: #eaeaea;
  color: #a2c6e8;
}
</style>

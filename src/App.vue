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

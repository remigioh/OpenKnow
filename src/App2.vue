<template>
<v-app>
  <v-navigation-drawer permanent expand-on-hover app>
    <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="@/assets/repositorio.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
               {{ title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ lema }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list  nav>

<v-list-item v-for="([icon, text], i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon> {{ icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ text }} </v-list-item-title>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>

  <v-app-bar color="#154360" dark app>
      
      <v-toolbar-title>{{ title }}</v-toolbar-title>

     <v-spacer></v-spacer>

        <v-tabs align-with-title>
          <v-tab>Inicio</v-tab>
          <v-tab>Listar</v-tab>
          <v-tab>Agregar</v-tab>
          <v-tab>Editar</v-tab>
          <v-tab>Buscar</v-tab>
          <v-tab>Log in</v-tab>
        </v-tabs>
      

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

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
export default {
    // name: "App",

  data() {
    return {
      title: "Open Know",
      lema: "Repositorio del conocimiento para todos",
      items: [
        ['mdi-home', 'Inicio'],
        ['mdi-magnify', 'Buscar'],
        ['mdi-format-list-numbered', 'Listar'],
        ['mdi-login', 'Log in'],
        ['mdi-folder', 'Mis archivos'],
        ['mdi-database-plus', 'Agregar'],
        ['mdi-playlist-edit', 'Editar'],
        ['mdi-account-multiple', 'Compartir'],
        ['mdi-star', 'Calificar'],
      ],
    }
  }
};


/*
export default {
    data: () => ({ 
      drawer: null 
      }),
  };
  */
</script>

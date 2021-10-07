<template>
<v-app>
  <v-navigation-drawer permanent expand-on-hover app>
    <v-list>
<v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/repositorio.png"
    ></v-img>

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

<v-list-item v-for="item in items" :key="item.text" :to="item.page" link>
            <v-list-item-icon>
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ item.text }} </v-list-item-title>
          </v-list-item>
  
        </v-list>
      </v-navigation-drawer>

  <v-app-bar color="#154360" dark app>

      <v-toolbar-title><v-img align-with-title
      class="white--text align-end"
      width="79px"   
      height="60"
      src="@/assets/repositorio.png"
    ></v-img></v-toolbar-title>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <v-toolbar-title class="text-h4">{{ title }}</v-toolbar-title> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {{ lema }}

     <v-spacer></v-spacer>
<template v-slot:extension>
        <v-tabs align-with-title v-for="item in items" :key="item.text">
          <v-tab :to="item.page" link>{{ item.text }}</v-tab>
        </v-tabs>
      </template>
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
          <v-list-item  v-for="item in items" :key="item.text" :to="item.page" link>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
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
  data() {
    return {
      title:"Open Know",
      lema:"Repositorio del conocimiento libre",
      items: [
        {icon:"mdi-home", text:"Inicio", page:"/"},
        {icon:"mdi-information", text:"Acerca de", page:"/about"},
        {icon:"mdi-login", text:"Log in", page:"/login"},
        {icon:"mdi-folder", text:"Mis archivos", page:"/mi_files"},
        {icon:"mdi-database-plus", text:"Agregar", page:"/add"},
        {icon:"mdi-playlist-edit", text:"Editar", page:"/edit"},
        {icon:"mdi-account-multiple", text:"Compartir", page:"/share"},
        {icon:"mdi-format-list-numbered", text:"Listar", page:"/list"},
        {icon:"mdi-magnify", text:"Buscar",page:"/search"}
      ],
    }
  }
};
</script>

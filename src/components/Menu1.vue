<template>
<div>
  <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
           {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense nav v-if="isAdmin">
        <v-list-item v-for="item in adminItems" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </div>
</template>

<script>
export default {
    name:"Menu",
    props: ["title", "isAdmin"],
    data(){
        return {
            subtitle: "Repositorio del conocimiento libre",
            adminItems: [{ title: 'Editar', icon: 'mdi-edit_note' },
            { title: 'Agregar', icon: 'mdi-post_add' },],
            items: [
          { title: 'Inicio', icon: 'mdi-home' },
          { title: 'Buscar', icon: 'mdi-magnify' },
          { title: 'Listar', icon: 'mdi-list' },
           { title: 'Log In', icon: 'mdi-login' },
        ],
        };
    },
};
</script>

<style>

</style>
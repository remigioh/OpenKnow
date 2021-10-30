<template>
  <main>
 <h1>{{ saberes }}</h1> 
<div class="categorias">
   <button type="button" v-for="categoria in categorias" :key="categoria.nombre" :style="{ backgroundColor: categoria.color}" @click="$router.push(categoria.page)" link>{{categoria.nombre}}</button>
    </div>
    </main>
</template>
<script>
export default {
    props: {
      categorias: {
        type: Array,
        required: true
      }
    }
};
</script>
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
  props: ["categoria"],
}
</script>

<style>
h1 {
    margin-top:-10px;
    text-align: center;
    color:white; 
		font-family:tahoma;
    background-color: #0987e3;
    padding: 20px;
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
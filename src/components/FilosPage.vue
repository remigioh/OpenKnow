<template>
  <main>
 <h1>{{ saber }}</h1>  
<div class="categorias">
   <button type="button" v-for="categoria in categorias" :key="categoria.nombre" :style="{ backgroundColor: categoria.color }" @click="$router.push(categoria.page)" link>{{categoria.nombre}}</button>
    </div>
    </main>
</template>

<script>
export default {
      data() {
        return{
        saber:'Filosofia',
    categorias:[{nombre:'Fenomenología', color:'#35c30c', page:"/listfiles"},               
                {nombre:'Existencialismo', color:'#fd8800', page:"/tobe"},             
                {nombre:'Epistemologia', color:'#bbbcb5', page:"/epis"},                   
                {nombre:'Hegel', color:'#de5246', page:"/hegel"},
                {nombre:'Husserl',color:'#0d8eef', page:"/husserl"},                       
                {nombre:'Heidegger', color:'#b5651d', page:"/ser"},
                {nombre:'Ontologia', color:'#fd8800', page:"/onto"},
                {nombre:'Deconstrucción', color:'#35c30c', page:"/deconst"},
                {nombre:'Platon', color:'#bb7796', page:"/plato"},
                {nombre:'Nietzche', color:'#b5651d', page:"/nietz"},
                {nombre:'Marxismo', color:'#0d8eef', page:"/marx"},
                {nombre:'Presocraticos', color:'#fd8800', page:"/grecia"},
                {nombre:'Metafisica', color:'#0d8eef', page:"/meta"},
                {nombre:'Analitica', color:'#35c30c', page:"/anal"},
                {nombre:'Logica', color:'#0d8eef', page:"/logica"}, 
                {nombre:'De la ciencia', color:'#11e5ed', page:"/science"},
                {nombre:'Etica', color:'#bbbcb5', page:"/ethics"},
                {nombre:'Estetica', color:'#b5651d', page:"/estetica"},
                {nombre:'Politica', color:'#35c30c', page:"/polis"},
                {nombre:'Del lenguaje', color:'#11e5ed', page:"/leng"},
                {nombre:'Estructuralismo', color:'#de5246', page:"/structure"}
                  ]
        }
    }
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
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
     data() {
        return{
        saberes:'Areás de saberes',
      categorias: [
              { nombre: "Biología", color: "#1a9310", page: "/biologia" },
                {nombre:'Filosofía', color:'#fd8800', page:'/filos'},                   
                {nombre:'Informática', color:'#bbbcb5', page:'/tics'},                         
                {nombre:'Psicología', color:'#bb7796', page:'/psique'},
                {nombre:'Ingenierias',color:'#0978be', page:'/engineers'},
                {nombre:'Historia', color:'#b5651d', page:'/historia'},                  
                {nombre:'Pedagogía', color:'#fd8800', page:'/pedagogia'},
                {nombre:'Artes', color:'#de5246', page:'/arts'},
                {nombre:'Medicina', color:'#1a9310', page:'/medicin'},
                {nombre:'Economía', color:'#b5651d', page:'/economia'},
                { nombre: "Química", color: "#0978be", page: "/chem" },
                { nombre: "Espiritualidad", color:'#fd8800', page: "/spirit" },
                {nombre:'Física', color:'#0978be', page:'/physics'},
                {nombre:'Salud', color:'#1a9310', page:'/health'},
                {nombre:'Matemáticas', color:'#064676', page:'/math'}, 
                {nombre:'Derecho', color:'#11e5ed', page:'/law'},
                {nombre:'Electrónica', color:'#bbbcb5', page:'/electronics'},
                {nombre:'Administración', color:'#b5651d', page:'/admin'},
                {nombre:'Diseño', color:'#de5246', page:'/design'},
                {nombre:'Politica', color:'#11e5ed', page:'/police'},
                {nombre:'Literatura', color:'#de5246', page:'/lit'}
                  ]
        }
    }
}
</script>
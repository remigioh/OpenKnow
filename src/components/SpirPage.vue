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
        saber:'Espiritualidad',
    categorias:[{
    nombre:"Misticos cristianos", 
    color:"#35c30c", 
    page:"/cristian",
    },
{
    nombre:"Tolle", 
    color:"#35c30c", 
    page:"/tolle",
    },       
{nombre:"Adyashanti", color:"#fd8800", page:"/adya"},             
{nombre:"Silo", color:"#bbbcb5", page:"/silo"},                   
{nombre:"Osho", color:"#de5246", page:"/osho"},
{nombre:"Claudio Naranjo",color:"#0d8eef", page:"/naranjo"},                       
{nombre:"Jean Klein", color:"#b5651d", page:"/klein"},
{nombre:"Steve Taylor", color:"#fd8800", page:"/taylor"},
{nombre:"Alan Wats", color:"#35c30c", page:"/wats"},
{nombre:"Antonio Blay", color:"#bb7796", page:"/blay"},
{nombre:"Elias Capriles", color:"#b5651d", page:"/capriles"},
{nombre:"Gurdief", color:"#0d8eef", page:"/gurdief"},
{nombre:"Krishnamurti", color:"#fd8800", page:"/krishna"},
{nombre:"Maharshi", color:"#0d8eef", page:"/maharshi"},
{nombre:"Budismo zen", color:"#35c30c", page:"/zen"},
{nombre:"Mindfulnees", color:"#0d8eef", page:"/mindful"}, 
{nombre:"No-Dualismo", color:"#11e5ed", page:"/nodual"},
{nombre:"Sufismo", color:"#bbbcb5", page:"/suphism"},
{nombre:"Greco_Latina", color:"#b5651d", page:"/grecolat"},
{nombre:"Misticos Hindues", color:"#35c30c", page:"/india"},
{nombre:"Mistica Oriental", color:"#11e5ed", page:"/east"},
{nombre:"Mistico-filosoficos", color:"#de5246", page:"/misfilos"},
{nombre:"Nativo-Americana", color:"#fd8800", page:"/nativos"},
{nombre:"Trungpa", color:"#b5651d", page:"/trungpa"}
                  ]
        }
    }
}
</script>
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
    name: "Engineers",
  data() {
        return{
        saberes:'Ingenierias',
      categorias: [
    {
    nombre:"Electrica", 
    color:"#35c30c", 
    page:"/eleng",
    },               
{nombre:"Civil", color:"#fd8800", page:"/civil"},             
{nombre:"Industrial", color:"#bbbcb5", page:"/indus"},                   
{nombre:"Mecanica", color:"#de5246", page:"/mechanic"},
{nombre:"Ambiental",color:"#0d8eef", page:"/env"},                       
{nombre:"Química", color:"#b5651d", page:"/chemeng"},
{nombre:"de Materiales", color:"#fd8800", page:"/matter"},
{nombre:"Mecatronica", color:"#35c30c", page:"/mecatro"},
{nombre:"Robotica", color:"#bb7796", page:"/robot"},
{nombre:"Electronica", color:"#b5651d", page:"/nietz"},
{nombre:"De Petroleos", color:"#0d8eef", page:"/petro"},
{nombre:"Agricola", color:"#fd8800", page:"/agric"},
{nombre:"Sanitaria", color:"#0d8eef", page:"/sanita"},
{nombre:"Automotriz", color:"#35c30c", page:"/auto"},
{nombre:"Informatica", color:"#0d8eef", page:"/inform"}, 
{nombre:"Aeroespacial", color:"#11e5ed", page:"/aero"},
{nombre:"Del software", color:"#bbbcb5", page:"/softeng"},
{nombre:"Telecomunicaciones", color:"#b5651d", page:"/tele"},
{nombre:"Energias renovables", color:"#35c30c", page:"/energy"},
{nombre:"Geologica", color:"#11e5ed", page:"/geo"},
{nombre:"De Minas", color:"#de5246", page:"/minas"}
  ]
        }
    },
};
</script>
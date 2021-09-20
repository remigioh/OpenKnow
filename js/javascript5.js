const app = new Vue({
  el: '#app',
  data: {
    image:'./img/repositorio.png',
    description: 'Repositorio de recursos digitales de aprendizaje y difusión del conocimiento',
menu:["Compartir","Editar","Agregar","Buscar","Listar","Login"],
      saberes:'Areás de saberes',
    categorias:[{nombre:'Biología', color:'#1c5a0a'},                     {nombre:'Filosofía', color:'#fd8800'},                   {nombre:'TICs', color:'#bbbcb5'},                         {nombre:'Educación', color:'#fd8800'},                   {nombre:'Ingenierias',color:'#064676'},                   {nombre:'Historia', color:'#b5651d'},
                {nombre:'Artes', color:'#de5246'},{nombre:'Medicina', color:'#1c5a0a'},
                {nombre:'Psicología', color:'#bb7796'},
                {nombre:'Economía', color:'#b5651d'},
                {nombre:'Química', color:'#064676'},
                {nombre:'Espiritualidad', color:'#fd8800'},
                {nombre:'Física', color:'#064676'},{nombre:'Salud', color:'#1c5a0a'},
                {nombre:'Matemáticas', color:'#064676'}, 
                {nombre:'Derecho', color:'#11e5ed'},{nombre:'Electrónica', color:'#bbbcb5'},
                {nombre:'Administración', color:'#b5651d'},{nombre:'Diseño', color:'#1c5a0a'},{nombre:'Politica', color:'#11e5ed'},{nombre:'Literatura', color:'#de5246'}
                  ]
  }
});


/*
const app = Vue.createApp({
    data() {
        return {
        image:'./img/repositorio.png',
        description: 'Repositorio de recursos digitales de aprendizaje y difusión del conocimiento',
menu:["Compartir","Editar","Agregar","Buscar","Listar","Login"]
        }
    }
}); */
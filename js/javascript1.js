 /* const app = Vue.createApp({
    data() {
        return {
            image:'./img/repositorio.jpg',
            description: 'Repositorio de recursos digitales de aprendizaje y difusión del conocimiento',
            title:'Areás de saberes'
        }
    }
});

*/

const app = new Vue({
  el: '#app',
  data: {
    image:'./img/repositorio.png',
    description: 'Repositorio de recursos digitales de aprendizaje y difusión del conocimiento',
    saberes:'Areás de saberes',
    menu:["Home","Compartir","Editar","Agregar","Buscar","Listar","Login"],
      categorias: ["Biología","Filosofía","TICs","Educación","Ingenierias","Historia","Artes","Medicina","Economía","Psicología","Química","Espiritualidad","Física","Salud","Matemáticas","Derecho","Electrónica","Administración","Diseño","Politica","Literatura"]
  }
});
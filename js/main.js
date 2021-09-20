Vue.component('cabecera',{
    template:`<header>
   <img :src="image" width="263px" :alt="description">
    <div id="title">Open<br />Know</div>
    <div id="titulo"><br />Repositorio de recursos digitales de <br />aprendizaje y difusión del conocimiento<br /></div>
</header>`,
    data() {
        return {
            image:'./img/repositorio.png',
    description: 'Repositorio de recursos digitales de aprendizaje y difusión del conocimiento'
        }
    }
});

Vue.component('navegacion',{
    template:`<nav id="menu">
    <ul>
        <li v-for="item in menu"><a>{{item}}</a></li>
    </ul>
</nav>`,
    data() {
        return {
            menu:["Compartir","Editar","Agregar","Buscar","Listar","Login"]
        }
    }
});

Vue.component('home-page', {
    props: {
  },
    template:`<main>
 <h1>{{ saberes }}</h1>  
<div class="categorias">
   <button type="button" v-for="categoria in categorias" :key="categoria.nombre" :style="{ backgroundColor: categoria.color}">{{categoria.nombre}}</button>
    </div>
    </main>`,
    data() {
        return{
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
    }
});

Vue.component('filosofia', {
    props: {
  },
    template:`<main>
 <h1>{{ saber }}</h1>  
<div class="categorias">
   <button type="button" v-for="categoria in categorias" :key="categoria.nombre" :style="{ backgroundColor: categoria.color }">{{categoria.nombre}}</button>
    </div>
    </main>`,
    data() {
        return{
        saber:'Filosofia',
    categorias:[{nombre:'Fenomenología', color:'#1c5a0a'},               {nombre:'Existencialismo', color:'#fd8800'},             {nombre:'Epistemologia', color:'#bbbcb5'},               {nombre:'Ontologia', color:'#fd8800'},                   {nombre:'Husserl',color:'#064676'},                       {nombre:'Heidegger', color:'#b5651d'},
                {nombre:'Hegel', color:'#de5246'},{nombre:'Deconstrucción', color:'#1c5a0a'},
                {nombre:'Platon', color:'#bb7796'},
                {nombre:'Nietzche', color:'#b5651d'},
                {nombre:'Marxismo', color:'#064676'},
                {nombre:'Presocraticos', color:'#fd8800'},
                {nombre:'Metafisica', color:'#064676'},{nombre:'Analitica', color:'#1c5a0a'},
                {nombre:'Logica', color:'#064676'}, 
                {nombre:'De la ciencia', color:'#11e5ed'},{nombre:'Etica', color:'#bbbcb5'},
                {nombre:'Estetica', color:'#b5651d'},{nombre:'Politica', color:'#1c5a0a'},{nombre:'Del lenguaje', color:'#11e5ed'},{nombre:'Estructuralismo', color:'#de5246'}
                  ]
        }
    }
});


const app = new Vue({
  el: '#app',
  data: {
  }
});
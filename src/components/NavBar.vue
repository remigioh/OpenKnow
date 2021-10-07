<template>
<nav>
    <ul>
        <li v-for="item in items" :key="item.text"><a>{{item.text}}</a></li>
    </ul>
</nav>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
nav  {       
            position: absolute;
            width:100%;
            height:50px;
        }
		
nav ul 	{
        list-style:none;
		position:relative;
		top:-15px;
        left: -40px;
        display: flex;
        width:100%;
		}
		
nav ul li {
        flex-grow: 1;
		}

nav ul > li {
			text-align: center;
            color: aliceblue;
			}
		
nav ul li a {
			font-family: Arial Black;
            text-decoration: none;
            display: block;
            padding: 0.7em;
            margin-right: 1px;
             background: -webkit-linear-gradient(white,#2e73a7,#064676);
               background: -moz-linear-gradient(white,#2e73a7,#064676);
               background: -o-linear-gradient(white,#2e73a7,#064676);
                background: -ms-linear-gradient(white,#2e73a7,#064676);
		}		
			
nav ul li a:hover{
				background-color: #f9f9f9;
				color: #9fcaeb;
				box-shadow: 0px 0px 25px white;
				-webkit-box-shadow: 0px 0px 25px white;
				-moz-box-shadow: 0px 0px 25px white;
                z-index: 100;
				}	
		
a:link{
	background-color:#000000;
	color:#ffffff;
}
a:visited{
	background-color:#orange;
	color:#ffffff;
}
a:hover{
	background-color:#ff00ff;
	color:#ffffff;
}
a:active{
	background-color:#ff0000;
	color:#ffff00;
}
</style>
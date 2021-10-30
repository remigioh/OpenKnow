<template>
  <tics-page :categoria="categoria"></tics-page>
</template>

<script>
import TicsPage from "../components/TicsPage";

export default {
  name: "Tics",
  data() {
        return{
        saberes:'Informática',
      categorias: [
    {
      nombre: "Bases de datos",
      color: "#35c30c",
      page: "/dbs"
    },
    {
      nombre: "Programación",
      color: "#fd8800",
      page: "/program"
    },
    {
      nombre: "Desarrollo Web",
      color: "#bbbcb5",
      page: "/webdev"
    },
    {
      nombre: "Networking",
      color: "#de5246",
      page: "/network"
    },
    {
      nombre: "Hardware",
      color: "#0d8eef",
      page: "/hardware"
    },
    {
      nombre: "software",
      color: "#b5651d",
      page: "/soft"
    },
    {
      nombre: "Ciencias de la computación",
      color: "#fd8800",
      page: "/cs"
    },
    {
      nombre: "Sistemas Operativos",
      color: "#35c30c",
      page: "/OSs"
    },
    {
      nombre: "Sistemas de información,",
      color: "#bb7796",
      page: "/Sis"
    },
    {
      nombre: "Internet de las cosas",
      color: "#b5651d",
      page: "/iot"
    },
    {
      nombre: "Computacion en la nube",
      color: "#0d8eef",
      page: "/cloud"
    },
    {
      nombre: "Inteligencia Artificial",
      color: "#fd8800",
      page: "/ai"
    },
    {
      nombre: "Analisis de sistemas",
      color: "#0d8eef",
      page: "/analisis"
    },
    {
      nombre: "Redes Linux",
      color: "#35c30c",
      page: "/linux"
    },
    {
      nombre: "sistemas Digitales",
      color: "#0d8eef",
      page: "/sistemas"
    },
    {
      nombre: "Computacion Aplicada",
      color: "#11e5ed",
      page: "/computo"
    },
    {
      nombre: "Diseño de sistemas",
      color: "#bbbcb5",
      page: "/diseño"
    },
    {
      nombre: "Teoria de sistemas",
      color: "#b5651d",
      page: "/teory"
    },
    {
      nombre: "Seguridad informatica",
      color: "#35c30c",
      page: "/seguridad"
    },
    {
      nombre: "Auditoria informatica",
      color: "#11e5ed",
      page: "/auditoria"
    },
    {
      nombre: "Data Manangement",
      color: "#de5246",
      page: "/data"
    },
  ]
        }
    },
  components: {
    TicsPage,
  }
};
</script>

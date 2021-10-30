import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/filos",
    name: "Filos",
    component: () => import("../views/Filos.vue"),
  },
  {
    path: "/tics",
    name: "Tics",
    component: () => import("../views/Tics.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../views/Add.vue"),
  },
  {
    path: "/listcat",
    name: "ListCat",
    component: () => import("../views/ListCat.vue"),
  },
  {
    path: "/listfiles",
    name: "ListFiles",
    component: () => import("../views/ListFiles.vue"),
  },
  {
    path: "/load",
    name: "Load",
    component: () => import("../views/Load.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

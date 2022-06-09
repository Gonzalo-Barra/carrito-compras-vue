import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pizza/:id",
    name: "Detalle",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Detalle" */ "../views/DetallePage.vue")
  },
  {
    path: "/carrito",
    name: "Carrito",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Carrito" */ "../views/CarritoPage.vue")
  }

];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

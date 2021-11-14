import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    name: "Detail",
    path: "/detail/:id",
    component: () => import("../views/Detail.vue"),
  },
  {
    name: "Search",
    path: "/search",
    component: () => import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

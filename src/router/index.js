import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gear from "../views/Gear.vue";
import News from "../views/News.vue";
import Training from "../views/Training.vue";
import Pictures from "../views/Pictures.vue";
import CompScene from "../views/CompScene.vue";
import ClimbingSpots from "../views/ClimbingSpots.vue";
import Cart from "../components/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/climbingspots",
    name: "ClimbingSpots",
    component: ClimbingSpots,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/gear",
    name: "Gear",
    component: Gear,
  },
  {
    path: "/compscene",
    name: "CompScene",
    component: CompScene,
  },
  {
    path: "/pictures",
    name: "Pictures",
    component: Pictures,
  },
  {
    path: "/training",
    name: "Training",
    component: Training,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

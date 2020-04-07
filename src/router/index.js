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
import SignUp from "../components/SignUp.vue";

// GEAR SHOP IMPORTS

import Ropes from "../components/gearshop/Ropes";
import RopeBags from "../components/gearshop/RopeBags";
import BelayDevices from "../components/gearshop/BelayDevices";
import ClimbingShoes from "../components/gearshop/ClimbingShoes";
import Helmets from "../components/gearshop/Helmets";
import Chalk from "../components/gearshop/Chalk";
import ChalkBags from "../components/gearshop/ChalkBags";
import Quickdraws from "../components/gearshop/Quickdraws";
import Carabiners from "../components/gearshop/Carabiners";
import SlingsAndCords from "../components/gearshop/SlingsAndCords";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/climbingspots",
    name: "ClimbingSpots",
    component: ClimbingSpots
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/gear",
    name: "Gear",
    component: Gear
  },
  {
    path: "/compscene",
    name: "CompScene",
    component: CompScene
  },
  {
    path: "/pictures",
    name: "Pictures",
    component: Pictures
  },
  {
    path: "/training",
    name: "Training",
    component: Training
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },

  // GEAR SHOP ROUTES
  {
    path: "/ropes",
    name: "Ropes",
    component: Ropes
  },
  {
    path: "/rope-bags",
    name: "RopeBags",
    component: RopeBags
  },
  {
    path: "/belay-devices",
    name: "BelayDevices",
    component: BelayDevices
  },
  {
    path: "/climbing-shoes",
    name: "ClimbingShoes",
    component: ClimbingShoes
  },
  {
    path: "/helmets",
    name: "Helmets",
    component: Helmets
  },
  {
    path: "/chalk",
    name: "Chalk",
    component: Chalk
  },
  {
    path: "/chalk-bags",
    name: "ChalkBags",
    component: ChalkBags
  },
  {
    path: "/quickdraws",
    name: "Quickdraws",
    component: Quickdraws
  },
  {
    path: "/carabiners",
    name: "Carabiners",
    component: Carabiners
  },
  {
    path: "/slings-and-cords",
    name: "SlingsAndCords",
    component: SlingsAndCords
  }
];

const router = new VueRouter({
  routes
});

export default router;

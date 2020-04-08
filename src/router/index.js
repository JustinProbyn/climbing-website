import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gear from "../views/Gear.vue";
import News from "../views/News.vue";
import Training from "../views/Training.vue";
import Pictures from "../views/Pictures.vue";
import AddArticle from "../views/AddArticle.vue";
import AddPicture from "../views/AddPicture.vue";
import ClimbingSpots from "../views/ClimbingSpots.vue";
import Cart from "../components/Cart.vue";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";

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
    path: "/add-article",
    name: "add-article",
    component: AddArticle
  },
  {
    path: "/add-picture",
    name: "add-picture",
    component: AddPicture
  },
  {
    path: "/climbing-spots",
    name: "climbing-spots",
    component: ClimbingSpots
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/gear",
    name: "gear",
    component: Gear
  },
  {
    path: "/pictures",
    name: "pictures",
    component: Pictures
  },
  {
    path: "/training",
    name: "training",
    component: Training
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },

  // GEAR SHOP ROUTES
  {
    path: "/ropes",
    name: "ropes",
    component: Ropes
  },
  {
    path: "/rope-bags",
    name: "rope-bags",
    component: RopeBags
  },
  {
    path: "/belay-devices",
    name: "belay-devices",
    component: BelayDevices
  },
  {
    path: "/climbing-shoes",
    name: "climbing-shoes",
    component: ClimbingShoes
  },
  {
    path: "/helmets",
    name: "helmets",
    component: Helmets
  },
  {
    path: "/chalk",
    name: "chalk",
    component: Chalk
  },
  {
    path: "/chalk-bags",
    name: "chalk-bags",
    component: ChalkBags
  },
  {
    path: "/quickdraws",
    name: "quickdraws",
    component: Quickdraws
  },
  {
    path: "/carabiners",
    name: "carabiners",
    component: Carabiners
  },
  {
    path: "/slings-and-cords",
    name: "slings-and-cords",
    component: SlingsAndCords
  }
];

const router = new VueRouter({
  routes
});

export default router;

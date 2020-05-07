import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Expertise from "../views/Expertise.vue";
import firebase from "firebase";
import cart from "../store/modules/cart";

// GEAR SHOP IMPORTS

Vue.use(VueRouter);

const routes = [
  {
    // catch all 404 - define at the very end
    path: "*",
    component: () => import("../views/404/404.vue")
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { hideButton: true }
  },
  {
    path: "/user-account",
    name: "user-account",
    component: () =>
      import(
        /*webpackChunkName "UserAccountPage" */ "../views/UserAccountPage.vue"
      ),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) next({ name: "home" });
        else next();
      });
    }
  },
  {
    path: "/add-article",
    name: "add-article",
    component: () =>
      import(/*webpackChunkName "AddArticle" */ "../views/AddArticle.vue")
  },
  {
    path: "/add-picture",
    name: "add-picture",
    component: () =>
      import(/*webpackChunkName "AddPicture" */ "../views/AddPicture.vue")
  },
  {
    path: "/climbing-spots",
    name: "climbing-spots",
    component: () =>
      import(/*webpackChunkName "ClimbingSpots" */ "../views/ClimbingSpots.vue")
  },
  {
    path: "/news",
    name: "news",
    component: () => import(/*webpackChunkName "News" */ "../views/News.vue")
  },
  {
    path: "/gear",
    name: "gear",
    component: () => import(/*webpackChunkName "Gear" */ "../views/Gear.vue")
  },

  {
    path: "/pictures",
    name: "pictures",
    component: () =>
      import(/*webpackChunkName "Pictures" */ "../views/Pictures.vue")
  },

  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(/*webpackChunkName "Checkout" */ "../views/Checkout.vue"),
    beforeEnter: (to, from, next) => {
      if (cart.state.cartData.length <= 0) next({ name: "gear" });
      else next();
    }
  },

  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/*webpackChunkName "Cart" */ "../components/Cart.vue")
  },
  {
    path: "/signin",
    redirect: "/",
    name: "signin",
    component: () =>
      import(/*webpackChunkName "SignIn" */ "../components/SignIn.vue")
  },
  {
    path: "/signup",
    redirect: "/",
    name: "signup",
    component: () =>
      import(/*webpackChunkName "SignUp" */ "../components/SignUp.vue")
  },

  {
    path: "/expertise",
    name: "expertise",
    component: Expertise,
    children: [
      // EXPERTISE PAGE ROUTES

      {
        path: "/sport-climbing",
        name: "sport-climbing",
        component: () =>
          import(
            /*webpackChunkName "SportClimbing" */ "../components/selectedExpertise/SportClimbing"
          )
      },
      {
        path: "/trad-climbing",
        name: "trad-climbing",
        component: () =>
          import(
            /*webpackChunkName "TradClimbing" */ "../components/selectedExpertise/TradClimbing"
          )
      },
      {
        path: "/bouldering",
        name: "bouldering",
        component: () =>
          import(
            /*webpackChunkName "Bouldering" */ "../components/selectedExpertise/Bouldering"
          )
      },
      {
        path: "/rappelling",
        name: "rappelling",
        component: () =>
          import(
            /*webpackChunkName "Rappelling" */ "../components/selectedExpertise/Rappelling"
          )
      },

      {
        path: "/lead-belaying",
        name: "lead-belaying",
        component: () =>
          import(
            /*webpackChunkName "LeadBelaying" */ "../components/selectedExpertise/LeadBelaying"
          )
      },
      {
        path: "/training",
        name: "training",
        component: () =>
          import(
            /*webpackChunkName "Training" */ "../components/selectedExpertise/Training"
          )
      },
      {
        path: "/top-rope-belaying",
        name: "top-rope-belaying",
        component: () =>
          import(
            /*webpackChunkName "TopRopeBelaying" */ "../components/selectedExpertise/TopRopeBelaying"
          )
      }
    ]
  },

  // GEAR SHOP ROUTES
  {
    path: "/ropes",
    name: "ropes",
    component: () =>
      import(/*webpackChunkName "Ropes" */ "../components/gearshop/Ropes")
  },
  {
    path: "/rope-bags",
    name: "rope-bags",
    component: () =>
      import(/*webpackChunkName "RopeBags" */ "../components/gearshop/RopeBags")
  },
  {
    path: "/belay-devices",
    name: "belay-devices",
    component: () =>
      import(
        /*webpackChunkName "BelayDevices" */ "../components/gearshop/BelayDevices"
      )
  },
  {
    path: "/climbing-shoes",
    name: "climbing-shoes",
    component: () =>
      import(
        /*webpackChunkName "ClimbingShoes" */ "../components/gearshop/ClimbingShoes"
      )
  },
  {
    path: "/helmets",
    name: "helmets",
    component: () =>
      import(/*webpackChunkName "Helmets" */ "../components/gearshop/Helmets")
  },
  {
    path: "/chalk",
    name: "chalk",
    component: () =>
      import(/*webpackChunkName "Chalk" */ "../components/gearshop/Chalk")
  },
  {
    path: "/chalk-bags",
    name: "chalk-bags",
    component: () =>
      import(
        /*webpackChunkName "ChalkBags" */ "../components/gearshop/ChalkBags"
      )
  },
  {
    path: "/quickdraws",
    name: "quickdraws",
    component: () =>
      import(
        /*webpackChunkName "Quickdraws" */ "../components/gearshop/Quickdraws"
      )
  },
  {
    path: "/carabiners",
    name: "carabiners",
    component: () =>
      import(
        /*webpackChunkName "Carabiners" */ "../components/gearshop/Carabiners"
      )
  },
  {
    path: "/slings-and-cords",
    name: "slings-and-cords",
    component: () =>
      import(
        /*webpackChunkName "SlingsAndCords" */ "../components/gearshop/SlingsAndCords"
      )
  },
  {
    path: "/harnesses",
    name: "harnesses",
    component: () =>
      import(
        /*webpackChunkName "Harnesses" */ "../components/gearshop/Harnesses"
      )
  },
  {
    path: "/crash-pads",
    name: "crash-pads",
    component: () =>
      import(
        /*webpackChunkName "CrashPads" */ "../components/gearshop/CrashPads"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

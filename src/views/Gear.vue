<template>
  <v-app>
    <div class="gear__body">
      <header>
        <navbar v-if="stickyActive == true"></navbar>
        <stickynav v-if="stickyActive == false"></stickynav>
        <cart></cart>
        <div class="whitepanel">
          <div
            v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions
        }"
          ></div>
          <div class="gear__header">
            <h1>Gear</h1>
          </div>

          <gear-suggester></gear-suggester>
          <div class="mock-promotion">
            <p style="background-color: black; color: white; padding: 3px">Promotional item</p>
          </div>
          <div class="products__container">
            <products v-for="(product, i) in products" :product="product" :key="i"></products>
          </div>
        </div>
        <footer-comp></footer-comp>
      </header>
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
import Footer from "../components/Footer.vue";
import Products from "../components/Products.vue";
import Cart from "../components/Cart.vue";
import GearSuggester from "../components/GearSuggester.vue";
export default {
  data() {
    return {
      // Waypoint options
      stickyActive: true,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.25, 0.75]
      },
      // All products sent to Products.Vue (Component)
      products: [
        {
          type: "ropes",
          img: require("../../public/img/rope.jpg"),
          path: "/ropes"
        },
        {
          type: "Rope Bags",
          img: require("../../public/img/ropebag.jpg"),
          path: "/rope-bags"
        },
        {
          type: "Belay devices",
          img: require("../../public/img/belaydevice.jpg"),
          path: "/belay-devices"
        },
        {
          type: "climbing shoes",
          img: require("../../public/img/climbingshoes.jpg"),
          path: "/climbing-shoes"
        },
        {
          type: "helmets",
          img: require("../../public/img/helmet.jpg"),
          path: "/helmets"
        },
        {
          type: "harnesses",
          img: require("../../public/img/harnesses.jpg"),
          path: "/harnesses"
        },
        {
          type: "chalk",
          img: require("../../public/img/chalk.jpg"),
          path: "/chalk"
        },
        {
          type: "chalk bags",
          img: require("../../public/img/chalkbag.jpg"),
          path: "/chalk-bags"
        },
        {
          type: "quickdraws",
          img: require("../../public/img/quickdraws.jpg"),
          path: "/quickdraws"
        },
        {
          type: "carabiners",
          img: require("../../public/img/gear/carabiners/bd-_GridLock_Magnetron_Carabiner__51369.1533288829.jpg"),
          path: "/carabiners"
        },
        {
          type: "slings and cords",
          img: require("../../public/img/gear/SnCs/390012_daisychain_140cm_rd_web__14894.1571837151.jpg"),
          path: "/slings-and-cords"
        },
        {
          type: "crashPads",
          img: require("../../public/img/gear/crashPads/dominator__28788.1529421510.jpg"),
          path: "/crash-pads"
        }
      ]
    };
  },
  components: {
    navbar: NavBar,
    stickynav: StickyNavBar,
    footerComp: Footer,
    products: Products,
    cart: Cart,
    gearSuggester: GearSuggester
  },
  methods: {
    // Waypoint that triggers Stickynav
    onWaypoint({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.stickyActive = true;
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.stickyActive = false;
      }
    }
  }
};
</script>

<style scoped>
/* LAYOUT */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.gear__body {
  display: flex;
  justify-content: center;
}

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
}

.whitepanel {
  margin-left: 5%;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-top: 150px;
  margin-bottom: 50px;
  display: flex;
}

/* TITLE */
.gear__header h1,
.gear__header h2 {
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
  text-transform: uppercase;
  font-size: 400%;
  font-weight: 300;
  color: #fff;
  word-spacing: 2px;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
  margin: 20px 20px;
  background-image: url("../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

/* BODY */

.gear__header .pictures__nav {
  font-size: 200%;
}

.products__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 65%;
  align-self: flex-end;
}

/* promotion panel */

.mock-promotion {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 330px;
  width: 35%;
  border: 1px solid black;
  border-radius: 3px;
  justify-self: flex-start;
  margin-top: 1300px;
  margin-left: 25px;
  background-image: url("../../public/img/belaying-article-1.jpg");
  opacity: 0.8;
}
</style>

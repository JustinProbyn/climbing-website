<template>
<body>
  <div class="gear__container">
    <div class="gear__header">
      <h1>Gear</h1>
      <cart></cart>
      <navbar></navbar>
    </div>
    <div class="products__container">
      <products v-for="product in products" :product="product" :key="product"></products>
    </div>
    <footer-comp></footer-comp>
  </div>
</body>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Products from "../components/Products.vue";
import Cart from "../components/Cart.vue";
export default {
  data() {
    return {
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
        }
      ]
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    products: Products,
    cart: Cart
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

.gear__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.products__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

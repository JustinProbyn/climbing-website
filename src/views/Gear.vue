<template>
<body>
  <div class="gear__container">
    <div class="gear__header">
      <h1>Gear</h1>
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
export default {
  data() {
    return {
      // All products sent to Products.Vue (Component)
      products: [
        {
          type: "ropes",
          img: require("../../public/img/rope.jpg"),
          path: "ropes"
        },
        {
          type: "Rope Bags",
          img: require("../../public/img/rope.jpg"),
          path: "rope-bags"
        },
        {
          type: "Belay devices",
          img: require("../../public/img/rope.jpg"),
          path: "belay-devices"
        },
        {
          type: "climbing shoes",
          img: require("../../public/img/rope.jpg"),
          path: "climbing-shoes"
        },
        {
          type: "helmets",
          img: require("../../public/img/rope.jpg"),
          path: "helmets"
        },
        {
          type: "chalk",
          img: require("../../public/img/rope.jpg"),
          path: "chalk"
        },
        {
          type: "chalk bags",
          img: require("../../public/img/rope.jpg"),
          path: "chalk-bags"
        },
        {
          type: "quickdraws",
          img: require("../../public/img/rope.jpg"),
          path: "quickdraws"
        },
        {
          type: "carabiners",
          img: require("../../public/img/rope.jpg"),
          path: "carabiners"
        },
        {
          type: "slings and cords",
          img: require("../../public/img/rope.jpg"),
          path: "slings-and-cords"
        }
      ]
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    products: Products
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

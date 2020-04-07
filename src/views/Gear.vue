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
      products: [
        {
          type: "rope",
          text: "Placeholder text",
          img: require("../../public/img/rope.jpg")
        },
        {
          type: "quickdraw",
          text: "Placeholder text",
          img: require("../../public/img/rope.jpg")
        },
        {
          type: "climbing shoes",
          text: "Placeholder text",
          img: require("../../public/img/rope.jpg")
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
</style>

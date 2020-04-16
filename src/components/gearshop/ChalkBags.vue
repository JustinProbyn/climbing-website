<template>
  <body>
    <div class="chalkBags__container">
      <div class="chalkBags__header">
        <h1>Chalk Bags</h1>
        <cart></cart>
        <navbar></navbar>
      </div>
      <div class="product__container">
        <v-card
          v-for="item in items"
          :key="item"
          class="mx-auto card"
          max-width="250"
        >
          <v-img :src="item.itemPicture" height="200px"></v-img>
          <div class="chalkBag__name">
            <h3>{{ item.itemName }}</h3>
          </div>
          <div class="chalkBag__price">
            <h4>
              <strong
                >R{{
                  item.itemPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}</strong
              >
            </h4>
          </div>
          <div class="btn__container">
            <btn
              :id="item.id"
              class="ma-2 btn"
              outlined
              color="#d35400"
              @click="addToCart($event)"
              >Add to cart</btn
            >
          </div>
        </v-card>
      </div>
      <footer-comp></footer-comp>
    </div>
  </body>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import { cartMixin } from "../../mixins/cartMixin.js";
import Cart from "../../components/Cart.vue";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          itemName: "Beal Maxi Cocoon Chalk Bag",
          itemPrice: 395,
          itemPicture: require("../../../public/img/gear/chalkBags/Maxi_4__51975.1569407938.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Creek Chalk Bag",
          itemPrice: 495,
          itemPicture: require("../../../public/img/gear/chalkBags/630153_Creek_Chalk_Bag_web__59173.1553518136.jpg")
        },
        {
          id: 3,
          itemName: "Black Diamond Freerider Chalk Bag",
          itemPrice: 425,
          itemPicture: require("../../../public/img/gear/chalkBags/Honnold_Signature_ChalkBag__04786.1553518328.jpg")
        },
        {
          id: 4,
          itemName: "DMM Trad Chalk bag",
          itemPrice: 445,
          itemPicture: require("../../../public/img/gear/chalkBags/dmm-trad-RED__42760.1553865391.jpg")
        },
        {
          id: 5,
          itemName: "Evolv Andes Chalk Bag",
          itemPrice: 390,
          itemPicture: require("../../../public/img/gear/chalkBags/evolv-andes-emerald__29047.1562672292.jpg")
        }
      ]
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    cart: Cart
  },
  mixins: [cartMixin]
};
</script>

<style scoped>
/* GENERAL */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
}
.chalkBags__header {
  width: 100%;
}

.chalkBags__header h1,
.chalkBags__header h2 {
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
  background-image: url("../../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

.chalkBags__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.chalkBags__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* CHALK BAG ITEMS */

.chalkBag__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.chalkBag__price {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.btn__container :hover,
.btn__container :active {
  background-color: #d35400;
  color: #fff;
}

.btn :hover {
  color: #fff;
}

.btn {
  width: 100%;
  border: 1px solid #d35400;
  color: #d35400;
  text-transform: uppercase;
  padding: 5px;
  font-size: 90%;
  font-weight: 600;
  transition: color 0.3s;
  transition: background-color 0.3s;
}

.v-btn__content {
  width: 100%;
}
.product__container {
  display: flex;
  flex-wrap: wrap;
  padding: 35px;
  width: 100vw;
  height: auto;
}

.card {
  padding: 15px;
  display: flex;
}

.btn__container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 8px;
}
</style>

<template>
  <div class="chalkBags__body">
    <header>
      <navbar></navbar>
      <cart></cart>
      <div class="whitepanel">
        <div class="chalkBags__header">
          <h1>Chalk Bags</h1>
        </div>
        <div class="product__container">
          <v-card v-for="(chalkBag, i) in getGear" :key="i" class="mx-auto card" max-width="250">
            <v-img :src="chalkBag.itemPicture" height="200px"></v-img>
            <div class="chalkBag__name">
              <h3>{{ chalkBag.itemName }}</h3>
            </div>
            <div class="chalkBag__price">
              <h4>
                <strong>
                  R{{
                  chalkBag.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                </strong>
              </h4>
            </div>
            <div class="counter">
              <v-btn
                :id="chalkBag.id"
                :disabled="chalkBag.count <= 1 ? !disabled : disabled"
                @click="decreaseProduct($event)"
                outlined
                x-small
                class="decrease"
              >
                <v-icon style="font-size: 120%">mdi-minus</v-icon>
              </v-btn>

              <div>{{chalkBag.count}}</div>

              <v-btn
                :id="chalkBag.id"
                @click="increaseProduct($event)"
                outlined
                x-small
                class="increase"
              >
                <v-icon style="font-size: 120%;">mdi-plus</v-icon>
              </v-btn>
            </div>
            <div class="btn__container">
              <button
                :id="chalkBag.id"
                class="ma-2 btn"
                outlined
                color="#d35400"
                @click="addToCart($event)"
              >Add to cart</button>
            </div>
          </v-card>
        </div>
      </div>
      <footer-comp></footer-comp>
    </header>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import { cartMixin } from "../../mixins/cartMixin.js";
import Cart from "../../components/Cart.vue";
import { IncreaseDecreaseMixin } from "../../mixins/IncreaseDecreaseMixin";

export default {
  computed: {
    getGear() {
      return this.$store.getters.getGearshopData.chalkBags;
    }
  },
  data() {
    return { disabled: false, product: "chalkBags" };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    cart: Cart
  },
  mixins: [cartMixin, IncreaseDecreaseMixin]
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

.chalkBags__body {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../../public/img/climbing.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.whitepanel {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-top: 150px;
  margin-bottom: 50px;
  border-radius: 5px;
}

/* chalkBag ITEMS */

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
  width: 100%;
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
/* product counter */

.counter {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.increase {
  margin-left: 40px;
}

.decrease {
  margin-right: 40px;
}
</style>
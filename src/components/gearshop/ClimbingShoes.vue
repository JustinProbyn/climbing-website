<template>
  <div class="climbing-shoes__body">
    <header>
      <navbar></navbar>
      <cart></cart>
      <div class="whitepanel">
        <div class="climbing-shoes__header">
          <h1>Climbing Shoes</h1>
        </div>
        <div class="product__container">
          <v-card
            v-for="(climbingShoe, i) in getGear"
            :key="i"
            class="mx-auto card"
            max-width="250"
          >
            <v-img :src="climbingShoe.itemPicture" height="200px" :alt="climbingShoe.itemName"></v-img>
            <div class="climbing-shoe__name">
              <h3>{{ climbingShoe.itemName }}</h3>
            </div>
            <div class="climbing-shoe__price">
              <h4>
                <strong>
                  R{{
                  climbingShoe.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                </strong>
              </h4>
            </div>
            <div class="counter">
              <v-btn
                :id="climbingShoe.id"
                :disabled="climbingShoe.count <= 1 ? !disabled : disabled"
                @click="decreaseProduct($event)"
                outlined
                x-small
                class="decrease"
              >
                <v-icon style="font-size: 120%">mdi-minus</v-icon>
              </v-btn>

              <div>{{climbingShoe.count}}</div>

              <v-btn
                :id="climbingShoe.id"
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
                :id="climbingShoe.id"
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
      return this.$store.getters.getGearshopData.climbingShoes;
    }
  },
  data() {
    return { disabled: false, product: "climbingShoes" };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    cart: Cart
  },
  /**
   * cartMixin is a function that adds items to the cart
   * IncreaseDecreaseMixin is a function that increases/decreases the amount of one product added to the cart
   */
  mixins: [cartMixin, IncreaseDecreaseMixin]
};
</script>

<style scoped>
/* GENERAL */
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
}
.climbing-shoes__header {
  width: 100%;
}
.climbing-shoes__header h1,
.climbing-shoes__header h2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
  text-transform: uppercase;
  font-size: 400%;
  font-weight: 300;
  color: #fff;
  word-spacing: 2px;
  letter-spacing: 1px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 20px 20px;
  background-image: url("../../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

.climbing-shoes__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.climbing-shoes__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

header {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.911)), to(rgba(0, 0, 0, 0.7))),
    url("../../../public/img/climbing.jpg");
  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../../public/img/climbing.jpg");
  background-image: linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../../public/img/climbing.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.whitepanel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-left: 5%;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-top: 150px;
  margin-bottom: 50px;
  border-radius: 5px;
}

/* climbing-shoe ITEMS */

.climbing-shoe__name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 7px;
}

.climbing-shoe__price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
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
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.v-btn__content {
  width: 100%;
}
.product__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding: 35px;
  width: 100%;
  height: auto;
}

.card {
  padding: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.btn__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 8px;
}
/* product counter */

.counter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
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
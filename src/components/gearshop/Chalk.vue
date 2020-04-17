<template>
  <div class="chalks__body">
    <header>
      <navbar></navbar>
      <cart></cart>
      <div class="whitepanel">
        <div class="chalks__header">
          <h1>Chalk</h1>
        </div>
        <div class="product__container">
          <v-card v-for="item in items" :key="item" class="mx-auto card" max-width="250">
            <v-img :src="item.itemPicture" height="200px"></v-img>
            <div class="chalk__name">
              <h3>{{ item.itemName }}</h3>
            </div>
            <div class="chalk__price">
              <h4>
                <strong>
                  R{{
                  item.itemPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                </strong>
              </h4>
            </div>
            <div class="btn__container">
              <btn
                :id="item.id"
                class="ma-2 btn"
                outlined
                color="#d35400"
                @click="addToCart($event)"
              >Add to cart</btn>
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
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          itemName: "Black Diamond Black Gold 200g Chalk",
          itemPrice: 350,
          itemPicture: require("../../../public/img/gear/chalks/200g_Black_Gold__79117.1578569281.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond Black Gold 30g",
          itemPrice: 70,
          itemPicture: require("../../../public/img/gear/chalks/Black_Gold_30g__10984.1578496796.jpg")
        },
        {
          id: 3,
          itemName: "Evolv Chalk",
          itemPrice: 120,
          itemPicture: require("../../../public/img/gear/chalks/chalk_100g__03539.1529480141.jpg")
        },
        {
          id: 4,
          itemName: "Metolius Chalk Block (57g)",
          itemPrice: 30,
          itemPicture: require("../../../public/img/gear/chalks/Block-Chalk__62853.1529673074.jpg")
        },
        {
          id: 5,
          itemName: "Metolius ECO Chalk Ball",
          itemPrice: 110,
          itemPicture: require("../../../public/img/gear/chalks/Eco_chalk_ball__50742.1529675932.jpg")
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
.chalks__header {
  width: 100%;
}
.chalks__header h1,
.chalks__header h2 {
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

.chalks__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.chalks__body {
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

/* chalk ITEMS */

.chalk__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.chalk__price {
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
</style>
<template>
  <div class="BDs__body">
    <header>
      <navbar></navbar>
      <cart></cart>
      <div class="whitepanel">
        <div class="BDs__header">
          <h1>Belay Devices</h1>
        </div>
        <div class="product__container">
          <v-card v-for="item in items" :key="item" class="mx-auto card" max-width="250">
            <v-img :src="item.itemPicture" height="200px"></v-img>
            <div class="BD__name">
              <h3>{{ item.itemName }}</h3>
            </div>
            <div class="BD__price">
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
          itemName: "Black Diamond ATC Pilot",
          itemPrice: 795,
          itemPicture: require("../../../public/img/gear/BDs/BD-pilot-2__53236.1531741336.jpg")
        },
        {
          id: 2,
          itemName: "Black Diamond ATC XP",
          itemPrice: 395,
          itemPicture: require("../../../public/img/gear/BDs/BD-ATC-XP-black__00533.1531741679.jpg")
        },
        {
          id: 3,
          itemName: "Edelrid Giga Jul",
          itemPrice: 1250,
          itemPicture: require("../../../public/img/gear/BDs/73742_663a__60848.1571671926.jpg")
        },
        {
          id: 4,
          itemName: "DMM Mantis Belay Device",
          itemPrice: 325,
          itemPicture: require("../../../public/img/gear/BDs/c63_12112_a1165or-mantis-belay-device-orange__37123.1561551150.jpg")
        },
        {
          id: 5,
          itemName: "DMM Pivot Belay Device",
          itemPrice: 600,
          itemPicture: require("../../../public/img/gear/BDs/dmm-PIVOT-RED__41155.1551953037.jpg")
        }
      ]
    };
  },
  //send all product data to state
  created() {
    const belayDevices = this.items;
    this.$store.dispatch("sendToGearshop", belayDevices);
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    cart: Cart,
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
.BDs__header {
  width: 100%;
}
.BDs__header h1,
.BDs__header h2 {
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

.BDs__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.BDs__body {
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

/* BD ITEMS */

.BD__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.BD__price {
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

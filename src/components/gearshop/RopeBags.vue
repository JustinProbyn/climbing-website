<template>
<body>
  <div class="ropeBags__container">
    <div class="ropeBags__header">
      <h1>Rope Bags</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card v-for="ropeBag in ropeBags" :key="ropeBag" class="mx-auto card" max-width="250">
        <v-img :src="ropeBag.ropeBagPicture" height="200px"></v-img>
        <div class="ropeBag__name">
          <h3>{{ ropeBag.ropeBagName }}</h3>
        </div>
        <div class="ropeBag__price">
          <h4>
            <strong>{{ ropeBag.ropeBagPrice }}</strong>
          </h4>
        </div>
        <div class="btn__container">
          <btn class="ma-2 btn" outlined color="#d35400" @click="addToCart">Add to cart</btn>
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
export default {
  data() {
    return {
      ropeBags: [
        {
          ropeBagName: "Black Diamond Stone Duffel 42",
          ropeBagPrice: "R1,495",
          ropeBagPicture: require("../../../public/img/gear/rope-bags/bd-stone-42-nickel-1__97065.1561548951.jpg")
        },
        {
          ropeBagName: "Black Diamond Super Chute Rope Bag",
          ropeBagPrice: "R995",
          ropeBagPicture: require("../../../public/img/gear/rope-bags/bd-Superchute-closed__37628.1533652572.jpg")
        },
        {
          ropeBagName: "DMM Classic Rope Bag",
          ropeBagPrice: "R1,050",
          ropeBagPicture: require("../../../public/img/gear/rope-bags/DMM_CLassic__40396.1529574084.jpg")
        },
        {
          ropeBagName: "DMM Flight Rope Bag",
          ropeBagPrice: "R2,350",
          ropeBagPicture: require("../../../public/img/gear/rope-bags/c63_12090_flight-sport-climbing-rope-bag-grey__14107.1547298226.jpg")
        },
        {
          ropeBagName: "DMM Pitcher Rope Bag",
          ropeBagPrice: "R800",
          ropeBagPicture: require("../../../public/img/gear/rope-bags/DMM_Pitcher_Rope_Bag__99682.1529659287.jpg")
        }
      ]
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer
  },
  methods: {
    addToCart() {}
  }
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

.ropeBags__header h1,
.ropeBags__header h2 {
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

.ropeBags__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.ropeBags__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* ROPEBAG ITEMS */

.ropeBag__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.ropeBag__price {
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

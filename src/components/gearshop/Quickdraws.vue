<template>
<body>
  <div class="quickdraws__container">
    <div class="quickdraws__header">
      <h1>quickdraws</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card v-for="quickdraw in quickdraws" :key="quickdraw" class="mx-auto card" max-width="250">
        <v-img :src="quickdraw.quickdrawPicture" height="200px"></v-img>
        <div class="quickdraw__name">
          <h3>{{quickdraw.quickdrawName}}</h3>
        </div>
        <div class="quickdraw__price">
          <h4>
            <strong>{{quickdraw.quickdrawPrice}}</strong>
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
      quickdraws: [
        {
          quickdrawName: "Black Diamond Freewire Quickdraw",
          quickdrawPrice: "R345",
          quickdrawPicture: require("../../../public/img/gear/quickdraws/Freewire_12__14183.1578574366.jpg")
        },
        {
          quickdrawName: "DMM Alpha Trad Quickdraw",
          quickdrawPrice: "R370",
          quickdrawPicture: require("../../../public/img/gear/quickdraws/dmm-alphatrad-qd__70192.1560167274.jpg")
        },
        {
          quickdrawName: "Mammut Bionic Express Quickdraw",
          quickdrawPrice: "R295",
          quickdrawPicture: require("../../../public/img/gear/quickdraws/mammut-bionic-express-qd__00640.1530685822.jpg")
        },
        {
          quickdrawName: "Metolius FS Mini II Long Draw",
          quickdrawPrice: "R258",
          quickdrawPicture: require("../../../public/img/gear/quickdraws/metolius-fs-mini-longdraw-20__15932.1529677701.jpg")
        },
        {
          quickdrawName: "Ocun Falcon Quickdraw 5 Pack",
          quickdrawPrice: "R1,400",
          quickdrawPicture: require("../../../public/img/gear/quickdraws/Ocun-Falcon-QD-Zoom-PA-15-22-blue-5-pack__02060.1574157896.jpg")
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

.quickdraws__header h1,
.quickdraws__header h2 {
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

.quickdraws__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.quickdraws__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* quickdraw ITEMS */

.quickdraw__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.quickdraw__price {
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

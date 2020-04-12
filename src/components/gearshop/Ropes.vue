<template>
<body>
  <div class="ropes__container">
    <div class="ropes__header">
      <h1>Ropes</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card v-for="rope in ropes" :key="rope" class="mx-auto card" max-width="250">
        <v-img :src="rope.ropePicture" height="200px"></v-img>
        <div class="rope__name">
          <h3>{{rope.ropeName}}</h3>
        </div>
        <div class="rope__price">
          <h4>
            <strong>{{rope.ropePrice}}</strong>
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
      ropes: [
        {
          ropeName: "Beal Antidote 10.2mm x 60m",
          ropePrice: "R2,300",
          ropePicture: require("../../../public/img/gear/ropes/beal-antidote-blue__74743.1534508332.png")
        },
        {
          ropeName: "Beal Cobra 8.6mm",
          ropePrice: "R2,695",
          ropePicture: require("../../../public/img/gear/ropes/beal-cobra-green__62711.1534421904.png")
        },
        {
          ropeName: "Beal Diablo 9.8mm",
          ropePrice: "R2,995",
          ropePicture: require("../../../public/img/gear/ropes/beal-diablo-red-1__33088.1574086088.png")
        },
        {
          ropeName: "Beal Joker 9.1mm",
          ropePrice: "R3,595",
          ropePicture: require("../../../public/img/gear/ropes/BL__12361.1550060605.jpg")
        },
        {
          ropeName: "Beal Stinger 9.4mm",
          ropePrice: "R3,495",
          ropePicture: require("../../../public/img/gear/ropes/beal-stinger-anis__63887.1574074523.png")
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

.ropes__header h1,
.ropes__header h2 {
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

.ropes__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.ropes__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* ROPE ITEMS */

.rope__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.rope__price {
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

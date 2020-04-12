<template>
<body>
  <div class="chalks__container">
    <div class="chalks__header">
      <h1>Chalk</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card v-for="chalk in chalks" :key="chalk" class="mx-auto card" max-width="250">
        <v-img :src="chalk.chalkPicture" height="200px"></v-img>
        <div class="chalk__name">
          <h3>{{chalk.chalkName}}</h3>
        </div>
        <div class="chalk__price">
          <h4>
            <strong>{{chalk.chalkPrice}}</strong>
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
      chalks: [
        {
          chalkName: "Black Diamond Black Gold 200g Chalk",
          chalkPrice: "R350",
          chalkPicture: require("../../../public/img/gear/chalks/200g_Black_Gold__79117.1578569281.jpg")
        },
        {
          chalkName: "Black Diamond Black Gold 30g",
          chalkPrice: "R70",
          chalkPicture: require("../../../public/img/gear/chalks/Black_Gold_30g__10984.1578496796.jpg")
        },
        {
          chalkName: "Evolv Chalk",
          chalkPrice: "R120",
          chalkPicture: require("../../../public/img/gear/chalks/chalk_100g__03539.1529480141.jpg")
        },
        {
          chalkName: "Metolius Chalk Block (57g)",
          chalkPrice: "R30",
          chalkPicture: require("../../../public/img/gear/chalks/Block-Chalk__62853.1529673074.jpg")
        },
        {
          chalkName: "Metolius ECO Chalk Ball",
          chalkPrice: "R110",
          chalkPicture: require("../../../public/img/gear/chalks/Eco_chalk_ball__50742.1529675932.jpg")
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

.chalks__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* CHALK ITEMS */

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

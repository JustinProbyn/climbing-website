<template>
<body>
  <div class="climbingShoes__container">
    <div class="climbingShoes__header">
      <h1>climbingShoes</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card
        v-for="climbingShoe in climbingShoes"
        :key="climbingShoe"
        class="mx-auto card"
        max-width="250"
      >
        <v-img :src="climbingShoe.climbingShoePicture" height="200px"></v-img>
        <div class="climbingShoe__name">
          <h3>{{climbingShoe.climbingShoeName}}</h3>
        </div>
        <div class="climbingShoe__price">
          <h4>
            <strong>R{{climbingShoe.climbingShoePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</strong>
          </h4>
        </div>
        <div class="btn__container">
          <btn
            :id="climbingShoe.id"
            class="ma-2 btn"
            outlined
            color="#d35400"
            @click="addToCart($event)"
          >Add to cart</btn>
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
      climbingShoes: [
        {
          id: 1,
          climbingShoeName: "La Sportiva Genius",
          climbingShoePrice: 3295,
          climbingShoePicture: require("../../../public/img/gear/climbingShoes/Screenshot_2019-03-04_at_13.19.50__40000.1551698403.png")
        },
        {
          id: 2,
          climbingShoeName: "La Sportiva Futura",
          climbingShoePrice: 2900,
          climbingShoePicture: require("../../../public/img/gear/climbingShoes/La_Sportiva_Futura__40135.1529410367.jpg")
        },
        {
          id: 3,
          climbingShoeName: "Ocun Pearl LU",
          climbingShoePrice: 1650,
          climbingShoePicture: require("../../../public/img/gear/climbingShoes/ocun-pearl__24530.1525952260.jpg")
        },
        {
          id: 4,
          climbingShoeName: "Ocun Oxi QC",
          climbingShoePrice: 1995,
          climbingShoePicture: require("../../../public/img/gear/climbingShoes/03755_Oxi_QC__70621.1529478170.jpg")
        },
        {
          id: 5,
          climbingShoeName: "Evolv Shakra",
          climbingShoePrice: 2150,
          climbingShoePicture: require("../../../public/img/gear/climbingShoes/evolv-shakra-side__24728.1529488995.jpg")
        }
      ]
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer
  },
  methods: {
    addToCart(event) {
      const id = event.currentTarget.id;
      for (let i = 0; i < this.climbingShoes.length; i++) {
        if ((this.climbingShoes.id = id)) {
          const shoeId = id - 1;

          const cartData = {
            cost: this.climbingShoes[shoeId].climbingShoePrice,
            shoe: this.climbingShoes[shoeId].climbingShoeName
          };
          this.$store.dispatch("addToCart", cartData);
          break;
        }
      }
    }
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

.climbingShoes__header h1,
.climbingShoes__header h2 {
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

.climbingShoes__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.climbingShoes__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* climbingShoe ITEMS */

.climbingShoe__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.climbingShoe__price {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.climbing__shoe {
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

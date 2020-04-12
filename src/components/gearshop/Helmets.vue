<template>
<body>
  <div class="helmets__container">
    <div class="helmets__header">
      <h1>helmets</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card v-for="helmet in helmets" :key="helmet" class="mx-auto card" max-width="250">
        <v-img :src="helmet.helmetPicture" height="200px"></v-img>
        <div class="helmet__name">
          <h3>{{helmet.helmetName}}</h3>
        </div>
        <div class="helmet__price">
          <h4>
            <strong>{{helmet.helmetPrice}}</strong>
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
      helmets: [
        {
          helmetName: "Black Diamond Half Dome Men's Helmet",
          helmetPrice: "R1,050",
          helmetPicture: require("../../../public/img/gear/helmets/bd-hd-hel-slate__34774.1561642997.jpg")
        },
        {
          helmetName: "Black Diamond Half Dome Women's Helmet",
          helmetPrice: "R1,050",
          helmetPicture: require("../../../public/img/gear/helmets/bd-HalfDome-Womens-caspian-1__05231.1533655545.jpg")
        },
        {
          helmetName: "Black Diamond Vector Helmet",
          helmetPrice: "R1,750",
          helmetPicture: require("../../../public/img/gear/helmets/BD-vecotr-helmet-blue__62946.1570615860.jpg")
        },
        {
          helmetName: "Mammut Rock Rider Helmet",
          helmetPrice: "R885",
          helmetPicture: require("../../../public/img/gear/helmets/2030-00131-00315_main_50461__24024.1565097281.jpg")
        },
        {
          helmetName: "Petzl Boreo Helmet",
          helmetPrice: "R1,170",
          helmetPicture: require("../../../public/img/gear/helmets/petzl-BOREO-view-1-fuschia__97605.1531840035.jpg")
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

.helmets__header h1,
.helmets__header h2 {
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

.helmets__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.helmets__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* helmet ITEMS */

.helmet__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.helmet__price {
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

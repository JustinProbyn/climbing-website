<template>
<body>
  <div class="BDs__container">
    <div class="BDs__header">
      <h1>Belay Devices</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card v-for="BD in BDs" :key="BD" class="mx-auto card" max-width="250">
        <v-img :src="BD.BDPicture" height="200px"></v-img>
        <div class="BD__name">
          <h3>{{BD.BDName}}</h3>
        </div>
        <div class="BD__price">
          <h4>
            <strong>{{BD.BDPrice}}</strong>
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
      BDs: [
        {
          BDName: "Black Diamond ATC Pilot",
          BDPrice: "R795",
          BDPicture: require("../../../public/img/gear/BDs/BD-pilot-2__53236.1531741336.jpg")
        },
        {
          BDName: "Black Diamond ATC XP",
          BDPrice: "R395",
          BDPicture: require("../../../public/img/gear/BDs/BD-ATC-XP-black__00533.1531741679.jpg")
        },
        {
          BDName: "Edelrid Giga Jul",
          BDPrice: "R1,250",
          BDPicture: require("../../../public/img/gear/BDs/73742_663a__60848.1571671926.jpg")
        },
        {
          BDName: "DMM Mantis Belay Device",
          BDPrice: "R325",
          BDPicture: require("../../../public/img/gear/BDs/c63_12112_a1165or-mantis-belay-device-orange__37123.1561551150.jpg")
        },
        {
          BDName: "DMM Pivot Belay Device",
          BDPrice: "R600",
          BDPicture: require("../../../public/img/gear/BDs/dmm-PIVOT-RED__41155.1551953037.jpg")
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

.BDs__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

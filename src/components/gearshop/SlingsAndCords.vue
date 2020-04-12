<template>
<body>
  <div class="SnCs__container">
    <div class="SnCs__header">
      <h1>SnCs</h1>
      <navbar></navbar>
    </div>
    <div class="product__container">
      <v-card v-for="SnC in SnCs" :key="SnC" class="mx-auto card" max-width="250">
        <v-img :src="SnC.SnCPicture" height="200px"></v-img>
        <div class="SnC__name">
          <h3>{{SnC.SnCName}}</h3>
        </div>
        <div class="SnC__price">
          <h4>
            <strong>{{SnC.SnCPrice}}</strong>
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
      SnCs: [
        {
          SnCName: "Black Diamond Nylon Daisy Chain",
          SnCPrice: "R375",
          SnCPicture: require("../../../public/img/gear/SnCs/390012_daisychain_140cm_rd_web__14894.1571837151.jpg")
        },
        {
          SnCName: "Black Diamond Dynex Runners",
          SnCPrice: "R245",
          SnCPicture: require("../../../public/img/gear/SnCs/bd-DYNEX-slings-120cm__65220.1571916180.jpg")
        },
        {
          SnCName: "Beal Accessory Cord",
          SnCPrice: "R5",
          SnCPicture: require("../../../public/img/gear/SnCs/beal-2-3mm-accessory-cord__55481.1533881198.jpg")
        },
        {
          SnCName: "Ocun Multipoint Belay Sling",
          SnCPrice: "R450",
          SnCPicture: require("../../../public/img/gear/SnCs/526b__70072.1537373840.jpg")
        },
        {
          SnCName: "Petzl Anneau Nylon Sling",
          SnCPrice: "R105",
          SnCPicture: require("../../../public/img/gear/SnCs/068w0000003wLFZAA2__31656.1551874979.jpg")
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

.SnCs__header h1,
.SnCs__header h2 {
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

.SnCs__header .pictures__nav {
  float: right;
  font-size: 200%;
}

.SnCs__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* SNC ITEMS */

.SnC__name {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}

.SnC__price {
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

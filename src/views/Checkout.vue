<template>
  <v-app>
    <div class="checkout__body">
      <header>
        <navbar v-if="stickyActive == true"></navbar>
        <stickynav v-if="stickyActive == false"></stickynav>
        <cart></cart>
        <div class="whitepanel">
          <div
            v-waypoint="{
              active: true,
              callback: onWaypoint,
              options: intersectionOptions
            }"
          ></div>
          <div class="checkout__header">
            <h1>Checkout</h1>
          </div>

          <div class="checkout__container" v-if="getCartData.length >= 1">
            <h1>Cart</h1>
            <div class="cartitems" v-for="(item, i) in getCartData" :key="i">
              <div class="carttext">
                <h4>{{ item.product }}</h4>
                <p>
                  R{{
                    item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  x
                  {{ item.count }}
                </p>
                <p>
                  Total for this item:
                  <strong
                    >R{{
                      (item.cost * item.count)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}</strong
                  >
                </p>
              </div>
              <img
                class="cartimg"
                style="width: 200px"
                :src="`../../${item.img}`"
                :alt="`Image of ${item.product}`"
              />
            </div>

            <div class="total">
              <h3>
                Total: R{{
                  totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
              </h3>
            </div>
            <checkoutcomp :finalAmount="finalAmount"></checkoutcomp>
            <!--we're going to add our checkout here-->
          </div>
        </div>
        <footer-comp></footer-comp>
      </header>
    </div>
  </v-app>
</template>

<script>
import CheckoutComp from "../components/CheckoutComp";
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
import Footer from "../components/Footer.vue";
import Cart from "../components/Cart.vue";
export default {
  components: {
    checkoutcomp: CheckoutComp,
    navbar: NavBar,
    stickynav: StickyNavBar,
    footerComp: Footer,
    cart: Cart
  },
  data() {
    return {
      // Waypoint options
      stickyActive: false,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.25, 0.75]
      },
      paymentSuccessful: true,
      finalAmount: 0
    };
  },
  created() {
    this.finalAmount = this.totalCost;
  },
  computed: {
    getCartData() {
      return this.$store.getters.getCartData;
    },
    totalCost() {
      const result = [];
      for (let i = 0; i < this.getCartData.length; i++) {
        const total = this.getCartData[i].cost * this.getCartData[i].count;
        result.push(total);
      }
      return result.reduce((acumm, cost) => acumm + cost, 0);
    },
    totalCount() {
      const result = [];
      for (let i = 0; i < this.getCartData.length; i++) {
        const total = this.getCartData[i].count;
        result.push(total);
      }
      return result.reduce((acumm, count) => acumm + count, 0);
    }
  },
  methods: {
    // Waypoint that triggers Stickynav
    onWaypoint({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        this.stickyActive = true;
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.stickyActive = false;
      }
    }
  }
};
</script>

<style scoped>
/* LAYOUT */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.checkout__body {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
}

.whitepanel {
  margin-left: 5%;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-top: 150px;
  margin-bottom: 50px;
}

/* TITLE */
.checkout__header h1,
.checkout__header h2 {
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
  background-image: url("../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

/* BODY */

.checkout__header .pictures__nav {
  font-size: 200%;
}
</style>

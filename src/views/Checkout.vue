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
          <div class="checkout__container">
            <div class="checkout__container--items" v-if="getCartData.length >= 1">
              <v-card class="cartitems" v-for="(item, i) in getCartData" :key="i">
                <div class="carttext">
                  <h4>{{ item.count }} X {{ item.product }}</h4>
                  <br />
                  <p>
                    Total for this item:
                    <strong>
                      R{{
                      (item.cost * item.count)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                    </strong>
                  </p>
                </div>
                <img
                  class="cartimg"
                  style="height: 200px"
                  :src="`../../${item.img}`"
                  :alt="`Image of ${item.product}`"
                />
                <v-btn @click="deleteCartItem(i)" class="ma-2" outlined color="#E65100">Delete item</v-btn>
              </v-card>
            </div>
            <div class="payment__container">
              <div class="cost__breakdown">
                <v-card>
                  <v-card-title></v-card-title>
                  <v-simple-table fixed-header>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Product</th>
                          <th class="text-left">Quantity</th>
                          <th class="text-left">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in getCartData" :key="item.name">
                          <td>{{ item.product }}</td>
                          <td>{{ item.count }}</td>
                          <td>
                            R{{ item.cost.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <div class="total">
                    <div class="total_text">Total:</div>
                    <div class="total_cost">
                      R{{
                      totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                    </div>
                  </div>
                </v-card>
              </div>
              <div class="checkout__container--payment">
                <checkoutcomp class="checkout__comp" style="width: 100%" :finalAmount="finalAmount"></checkoutcomp>
              </div>
            </div>
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

      //  cost table
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
    test() {
      console.log(this.getListData);
    },
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
    },
    deleteCartItem(index) {
      this.$store.dispatch("deleteCartItem", index);
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

.checkout__container {
  display: flex;
}

.payment__container {
  width: 80%;
  margin-right: 30px;
  margin-bottom: 30px;
  height: auto;
}

.checkout__header .pictures__nav {
  font-size: 200%;
}

.checkout__container--items {
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  width: 60%;
  margin-bottom: 30px;
}

.checkout__container--payment {
  width: 100%;
}

.checkout__comp {
  margin-bottom: 40px;
  width: 100%;
}

.cost__breakdown {
  box-shadow: 2px 2px 2px rgb(187, 186, 186);
  border-radius: 3px;
  width: 100%;
  margin-top: 20px;
}

/* cart items */

.cartitems {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 380px;
  padding: 10px;
  margin-left: 30px;
  margin-top: 20px;
}

/* Table */
.table_head {
  margin-top: 10px;
}
.total {
  border-top: 1px solid rgb(212, 212, 212);
  display: flex;
  text-transform: uppercase;
  color: #d35400;
  height: 45px;
  align-items: center;
}

.total_cost {
  margin-left: 78%;
}

.total_text {
  margin-left: 18px;
}
</style>

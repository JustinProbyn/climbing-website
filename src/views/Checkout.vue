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
            <div
              class="checkout__container--items"
              v-if="getCartData.length >= 1"
            >
              <v-card
                class="cartitems"
                v-for="(item, i) in getCartData"
                :key="i"
              >
                <div class="carttext">
                  <h4 style="margin-bottom: 20px" class="cartitem_quantity">
                    Qty
                    <v-chip
                      style="margin-left: 10px; padding: 10px"
                      size="22"
                      >{{ item.count }}</v-chip
                    >
                  </h4>
                  <h4>{{ item.product }}</h4>
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
                  :src="item.img"
                  :alt="`Image of ${item.product}`"
                />
                <v-btn
                  v-if="item.count <= 1"
                  @click="deleteCartItem(i)"
                  class="ma-2"
                  outlined
                  color="#E65100"
                  >Remove item</v-btn
                >
                <v-btn
                  v-else
                  @click="deleteCartItem(i)"
                  class="ma-2"
                  outlined
                  color="#E65100"
                  >Remove items</v-btn
                >
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
                            R{{
                              item.cost
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
                <!--  -->
                <div class="totals">
                  <div class="total">
                    <div class="total_text">Total</div>
                    <div class="total_cost">
                      <div class="items-total">
                        R{{
                          totalCost
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }}
                      </div>
                    </div>
                  </div>
                  <!-- Grand Total -->
                  <div class="total">
                    <div class="total_text">VAT</div>
                    <div class="total_cost--VAT">
                      <div class="items-total-VAT">
                        R{{
                          (totalCost * 0.15)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }}
                      </div>
                    </div>
                  </div>
                  <div class="total">
                    <div class="total_text">Delivery cost</div>
                    <div class="total_cost--delivery">
                      <div class="delivery-cost">R{{ deliveryCost }}</div>
                    </div>
                  </div>
                  <div class="total">
                    <div style="color: #d35400;" class="total_text">
                      Grand total
                    </div>
                    <div class="total_cost--grand">
                      <div class="grand-total">
                        R{{
                          totalCostVATAndDelivery
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }}
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Delivery -->
              </div>

              <div class="delivery-method">
                <p>Please select a delivery method:</p>
                <v-radio-group v-model="radio" row mandatory>
                  <v-radio value="collection" label="Collection"></v-radio>
                  <v-radio
                    value="courier"
                    label="Door-to-door courier"
                  ></v-radio>
                </v-radio-group>
                <div v-if="radio == 'collection'" class="collect-selected">
                  <p>
                    Please note: Due to the Coronavirus pandemic, in order to
                    prioritise the health and safety of our customers and
                    employees, until further notice we are no longer accepting
                    collections.
                  </p>
                </div>

                <div v-if="radio == 'courier'" class="courier-selected">
                  <div class="delivery-address">
                    <p>Please complete your delivery address:</p>
                    <v-text-field
                      v-model="deliveryAddress.streetNameNumber"
                      label="Street name and Street/Unit number"
                      outlined
                    ></v-text-field>
                    <v-text-field
                      v-model="deliveryAddress.suburb"
                      label="Suburb"
                      outlined
                    ></v-text-field>
                    <div class="address-small--input">
                      <v-text-field
                        v-model="deliveryAddress.city"
                        class="address-city"
                        label="City"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        v-model="deliveryAddress.province"
                        class="address-province"
                        label="Province"
                        outlined
                      ></v-text-field>
                    </div>
                  </div>
                </div>
                <div v-if="radio == 'courier'" class="delivery-cost">
                  Delivery cost: R{{ deliveryCost }}
                </div>
              </div>
              <div class="checkout__container--payment">
                <checkoutcomp
                  class="checkout__comp"
                  :deliveryCost="deliveryCost"
                  :finalAmount="finalAmount"
                  :deliveryAddress="deliveryAddress"
                ></checkoutcomp>
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
/**
 * The checkout page of the website.
 * This page itself does minimal computing.
 * It serves as a display to what items they user wishes to purchase,
 * the total cost including delivery and VAT.
 * The delivery cost is set statically, as this will be determined based on the delivery service selected at the time of implementation.
 * It houses CheckoutComp - the checkout component - that interacts with Stripe and Firestore to make a purchase
 */

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
      // Delivery radios
      radio: "",
      // Delivery address
      deliveryAddress: {
        streetNameNumber: "",
        suburb: "",
        city: "",
        province: ""
      },
      deliveryCost: 25,
      // Waypoint options
      stickyActive: true,
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
    totalCostVATAndDelivery() {
      return this.totalCost + this.totalCost * 0.15 + this.deliveryCost;
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
      if (going === this.$waypointMap.GOING_IN) {
        this.stickyActive = true;
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.stickyActive = false;
      }
    },
    deleteCartItem(index) {
      //action in cart.js module
      this.$store.dispatch("deleteCartItem", index);
      if (this.getCartData.length <= 0) {
        this.$router.push("gear");
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
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.checkout__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

header {
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.911)),
      to(rgba(0, 0, 0, 0.7))
    ),
    url("../../public/img/climbing.jpg");
  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
  text-transform: uppercase;
  font-size: 400%;
  font-weight: 300;
  color: #fff;
  word-spacing: 2px;
  letter-spacing: 1px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 20px 20px;
  background-image: url("../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

/* BODY */

.payment__container {
  width: 80%;
  margin-right: 30px;
  margin-bottom: 30px;
  height: auto;
}

/* checkout form */

.checkout__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.checkout__header .pictures__nav {
  font-size: 200%;
}

.checkout__container--items {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 60%;
  margin-bottom: 30px;
  margin-top: 10px;
}

.checkout__container--payment {
  width: 100%;
}

.checkout__comp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px;
  width: 50%;
  margin-top: 20px;
  margin-left: 50%;
  height: 550px;
}

/* cart items */

.cartitems {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 300px;
  height: 410px;
  padding: 10px;
  margin-left: 30px;
  margin-top: 10px;
}
.cartitems h4 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

/* Table */

.cost__breakdown {
  border-radius: 3px;
  width: 100%;
  margin-top: 20px;
}
.totals {
  margin-top: 30px;
  -webkit-box-shadow: 2px 2px 2px rgb(187, 186, 186);
  box-shadow: 2px 2px 2px rgb(187, 186, 186);
}

.table_head {
  margin-top: 10px;
}
.grand-total {
  color: #d35400;
  font-size: 110%;
  width: 100%;
}
.total {
  border-top: 1px solid rgb(212, 212, 212);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 90%;
  height: 50px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.total_cost {
  margin-left: 72.8%;
}

.total_cost--VAT {
  margin-left: 75%;
}

.total_cost--delivery {
  margin-left: 66.7%;
}

.total_cost--grand {
  margin-left: 68%;
}

.total_text {
  margin-left: 17px;
  text-transform: uppercase;
}

/* delivery */

.delivery-method {
  margin-top: 20px;
  position: absolute;
  width: 24%;
  height: 550px;
  -webkit-box-shadow: 1px 1px 1px 1px rgb(214, 214, 214);
  box-shadow: 1px 1px 1px 1px rgb(214, 214, 214);

  border-radius: 3px;
  padding: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

/* address */

.delivery-address {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 10px;
}

.address-small--input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.address-city {
  width: 40%;
}
.address-province {
  width: 40%;
  margin-left: 5px;
}
</style>

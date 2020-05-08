<template v-slot:activator="{ on }">
  <v-app>
    <div class="user-account__body">
      <header>
        <navbar v-if="stickyActive == true"></navbar>
        <stickynav v-if="stickyActive == false"></stickynav>
        <div class="whitepanel">
          <div
            v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions
          }"
          ></div>
          <div class="user-account__header">
            <h1>Your Orders</h1>
            <div
              style="margin-bottom: 30px"
              v-if="getOrderData <= 0"
              class="pending-orders-heading"
            >You have no current orders.</div>
            <div v-if="getOrderData.length > 1" class="orders">
              <div class="pending-orders-heading">Your pending orders are as follows:</div>
              <div v-for="(order, i) in getOrderData" :key="i" class="orders_separate">
                <v-card class="order_items" v-for="(product, i) in order.productsBought" :key="i">
                  <div class="carttext">
                    <h4 style="margin-bottom: 20px" class="cartitem_quantity">
                      <v-chip style="padding: 10px" size="22">{{product.count}}</v-chip>
                    </h4>
                    <h4>{{ product.product }}</h4>
                    <br />
                  </div>
                  <img
                    class="cartimg"
                    style="height: 140px"
                    :src="`../../${product.img}`"
                    :alt="`Image of ${product.product}`"
                  />
                </v-card>
                <v-card class="orders-individual">
                  <div>
                    Cost: R{{order.amount.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
                  </div>
                  <div>
                    This order is being delivered to
                    <strong>{{order.deliveryAddress.streetNameNumber}}, {{order.deliveryAddress.suburb}}, {{order.deliveryAddress.city}}, {{order.deliveryAddress.province}}</strong>
                  </div>
                  <div class="extra_order_info">Information about courier / Delivery date</div>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
export default {
  data() {
    return {
      currentTitle: "",
      // Waypoint options
      stickyActive: true,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.25, 0.75]
      }
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    stickynav: StickyNavBar
  },
  computed: {
    getOrderData() {
      return this.$store.getters.getOrderData;
    },
    getUsername() {
      return this.$store.getters.getUsername;
    }
  },
  methods: {
    test() {
      console.log(this.getOrderData);
    },
    onWaypoint({ going, direction }) {
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

<style>
/* ---GENERAL--- */
* {
  box-sizing: border-box;
  word-break: break-word;
  font-family: "Lato", "Arial", sans-serif;
}

.v-application ul {
  padding-left: 0px;
}

.user-account__body {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

h4 {
  text-align: center;
}
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
}

.whitepanel {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-top: 150px;
  margin-bottom: 50px;
  border-radius: 5px;
}

.user-account__header h1,
.user-account__header h2 {
  display: flex;
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

.user-account__header .pictures__nav {
  font-size: 200%;
}

/* PENDING ORDERS */

.orders {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pending-orders-heading {
  font-size: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d35400;
}

.orders_separate {
  margin-bottom: 30px;
  margin-top: 15px;
  margin-left: 50px;
  padding: 50px;
  width: auto;
  display: flex;
  border: 1px solid rgb(172, 172, 172);
  border-radius: 3px;
  align-self: flex-start;
}

.orders-individual {
  padding: 50px;
}

.order_items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  padding: 10px;
  border-radius: 4px;
}

.cartitem_quantity {
  display: flex;
  align-items: center;
  justify-content: center;
}

.extra_order_info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 65%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  color: #d35400;
}
</style>
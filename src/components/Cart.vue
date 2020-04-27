<template>
  <div>
    <div class="cart__container">
      <v-app>
        <v-icon
          @click="cartPopup = !cartPopup"
          icon
          class="cart__icon"
          color="grey lighten-1"
        >mdi-cart</v-icon>
      </v-app>
      <div @click="cartPopup = !cartPopup" class="cart__popup">{{ totalCount }} items in your cart</div>
    </div>

    <div class="text-center">
      <v-dialog v-model="cartPopup" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2 cart__title" primary-title>Your cart</v-card-title>

          <v-card-text class="itemsInCart" v-for="(data, index) in getCartData" :key="index">
            {{data.count}} x {{ data.product }}: R{{
            data.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            <v-icon class="deleteIcon" @click="deleteCartItem(index)">mdi-delete-forever</v-icon>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="total">
              <h2>
                Total: R{{
                totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
              </h2>
            </div>
            <v-spacer></v-spacer>

            <v-btn class="goToCheckout" color="primary" text @click="checkOut">
              <a>Go to checkout</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartPopup: false,
      showTooltip: false
    };
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
    checkOut() {
      this.dialog = false;
      this.$router.push("checkout");
      // this.$store.dispatch("clearCart");
      //lead to checkout interface when implemented
    },
    deleteCartItem(index) {
      this.$store.dispatch("deleteCartItem", index);
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Lato", "Arial", sans-serif;
  z-index: 9999;
}
.cart__container {
  display: flex;
  justify-content: flex-end;
  margin-right: 350px;
  height: 0px;
  position: absolute;
  margin-left: 73%;
  margin-top: 50px;
}

.cart__icon {
  margin-top: 5px;
  font-size: 150%;
}

.total {
  margin-left: 15px;
}

.itemsInCart {
  margin-top: 5px;
}

.cart__title {
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 300;
}

.goToCheckout a:hover,
.goToCheckout a:active {
  color: #d35400;
}

.deleteIcon {
  font-size: 120%;
  cursor: pointer;
}

.cart__popup {
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: rgb(211, 211, 211);
  border: 1px solid rgb(211, 211, 211);
  height: 35px;
  width: 160px;
  padding: 5px;
  border-radius: 8px;
  margin-left: 5px;
}
</style>

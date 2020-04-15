<template>
  <div v-if="getCartData.length > 0" class="cart__container">
    <v-app>
      <v-tooltip v-model="show" right>
        <template v-slot:activator="{ on }">
          <v-icon
            @click="dialog = true"
            icon
            v-on="on"
            class="cart__icon"
            color="grey lighten-1"
          >mdi-cart</v-icon>
        </template>
        <span class="cart__popup">{{ getCartData.length }} items in your cart</span>
      </v-tooltip>
    </v-app>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2 cart__title" primary-title>Your cart</v-card-title>

<<<<<<< HEAD
          <v-card-text
            class="itemsInCart"
            v-for="(data, index) in getCartData"
            :key="data"
          >
            {{ data.product }}: R{{
              data.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            <v-icon class="deleteIcon" @click.native="deleteCartItem(index)"
              >mdi-delete-forever</v-icon
            >
=======
          <v-card-text class="itemsInCart" v-for="(data, index) in getCartData" :key="data">
            {{ data.product }}: R{{
            data.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            <v-icon class="deleteIcon" @click.native="deleteCartItem(index)">mdi-delete-forever</v-icon>
>>>>>>> aa16c50d93a8655e9a8a3f476cf7ebb477d6535e
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
      dialog: false
    };
  },
  computed: {
    getCartData() {
      return this.$store.getters.getCartData;
    },
    totalCost() {
      const result = [];
      for (let i = 0; i < this.getCartData.length; i++) {
        const total = this.getCartData[i].cost;
        result.push(total);
      }
      return result.reduce((a, b) => a + b, 0);
    }
  },
  methods: {
    show() {
      this.$modal.show("cart");
    },
    hide() {
      this.$modal.hide("cart");
    },
    checkOut() {
      this.dialog = false;
      this.$store.dispatch("clearCart");
      //lead to checkout interface when implemented
    },
    deleteCartItem(index) {
      console.log("trying to delete");
      this.$store.dispatch("deleteCartItem", index);
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Lato", "Arial", sans-serif;
}
.v-application--wrap {
  max-height: 100px;
}
.cart__container {
  display: flex;
  justify-content: flex-end;
  margin-right: 470px;
  height: 0px;
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
</style>

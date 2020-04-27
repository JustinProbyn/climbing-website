<template>
  <div>
    <h1>Cart</h1>
    <div class="cartitems" v-for="(item, i) in getCartData" :key="i">
      <div class="carttext">
        <h4>{{ item.product }}</h4>
        <p>R{{ item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} x {{ item.count }}</p>
        <p>
          Total for this item:
          <strong>R{{ (item.cost * item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong>
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
      <h3>Total: R{{totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h3>
    </div>

    <!--we're going to add our checkout here-->
  </div>
</template>


<script>
export default {
  data() {
    return {
      paymentSuccessful: true
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
  }
};
</script>

<style scoped>
</style>
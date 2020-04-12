<template>
  <div class="cart__container">
    <div class="cart__items">{{ getCartData }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getCartData() {
      return this.$store.getters.getCartData;
    }
  }
};
</script>

<style scoped>
.cart__container {
  display: flex;
  justify-content: flex-end;
}
</style>

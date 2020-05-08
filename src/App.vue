<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("onRefresh"); //action in firestore module
    this.$store.dispatch("loadCartOnRefresh"); //action in cart module
    this.$store.dispatch("setGearShopItems"); //action in gear module
  }
};
</script>

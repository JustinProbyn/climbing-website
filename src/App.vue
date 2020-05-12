<template>
  <router-view></router-view>
</template>

<script>
/**
 * The main Page that displays all other routes.
 * Dispatches actions when it is loaded.
 */
export default {
  created() {
    this.$store.dispatch("onRefresh"); //action in firestore.js module
    this.$store.dispatch("loadCartOnRefresh"); //action in cart.js module
    
  }
};
</script>

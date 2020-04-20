<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("onRefresh");
    this.$store.dispatch("loadCartOnRefresh");
    // tries to login in with localstorage data when page reloads
  }
};
</script>

<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("onRefresh");
    // tries to login in with localstorage data when page reloads
  }
};
</script>

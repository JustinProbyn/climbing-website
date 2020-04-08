<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("tryAutoLogin");
    // tries to login in with localstorage data when page reloads
  }
};
</script>

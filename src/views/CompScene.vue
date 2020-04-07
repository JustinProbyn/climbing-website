<template>
  <div class="comp-scene__container">
    <div class="comp-scene__header">
      <h1>
        Comp Scene
      </h1>
      <navbar></navbar>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    navbar: NavBar,
    footerComp: Footer
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.comp-scene__header h1,
.comp-scene__header h2 {
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
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

.comp-scene__header .comp-scene__nav {
  float: right;
  font-size: 200%;
}
</style>

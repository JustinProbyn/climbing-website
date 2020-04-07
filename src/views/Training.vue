<template>
  <div class="training__container">
    <div class="training__header">
      <h1>
        training
      </h1>
      <navbar></navbar>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
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

.training__header h1,
.training__header h2 {
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

.training__header .pictures__nav {
  float: right;
  font-size: 200%;
}
</style>

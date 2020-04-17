<template>
  <div class="stickynav-bar__container">
    <v-icon class="go-back-sticky" @click="goBack">mdi-arrow-left-bold</v-icon>
    <nav class="stickynav__bar">
      <ul class="stickynav__bar--ul">
        <li class="go-back-btn--box">
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link @click.native="$scrollToTop" to="news">News</router-link>
        </li>
        <li>
          <router-link @click.native="$scrollToTop" to="pictures">Pictures</router-link>
        </li>
        <li>
          <router-link @click.native="$scrollToTop" to="sport-climbing">Expertise</router-link>
        </li>
        <li>
          <router-link @click.native="$scrollToTop" to="climbing-spots">Climbing spots</router-link>
        </li>
        <li>
          <router-link @click.native="$scrollToTop" to="gear">Gear</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import GoBack from "../components/GoBack.vue";
export default {
  components: {
    // goback: GoBack
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    goBack() {
      return this.$router.go(-1);
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
      // checks if state.userData.email exists then shows UI components based result
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
}

a.router-link-active {
  font-weight: 700;
}

.stickynav-bar__container {
  position: absolute;
}

.stickynav__bar {
  background-color: rgba(36, 36, 36, 0.418);
  list-style: none;
  width: 100vw;
  margin-top: 30px;
}

.stickynav__bar--ul {
  position: fixed;
  background-color: rgba(39, 41, 41, 0.897);
  display: flex;
  justify-content: center;
  list-style: none;
  color: rgb(218, 214, 214);
  display: flex;
  width: 100vw;
  list-style: none;
  z-index: 999;
  padding-left: 0px;
}

.stickynav__bar--ul li a:link,
.stickynav__bar--ul li a:visited {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 150%;
  margin-right: 40px;
  text-decoration: none;
  color: rgb(219, 219, 219);
  transition: color 0.3s;
  word-spacing: 2px;
}

.stickynav__bar--ul li a:hover,
.stickynav__bar--ul li a:active {
  color: #d35400;
}

.go-back-sticky {
  position: fixed;
  font-size: 270%;
  color: rgb(211, 211, 211);
  z-index: 9999;
  margin-top: 28px;
  margin-left: 85px;
}

.go-back-sticky:hover,
.go-back-sticky:active {
  color: #d35400;
}
</style>

<template>
  <div style=" z-index: 99;" class="nav-bar__container">
    <v-icon v-if="!$route.meta.hideButton" class="go-back" @click="goBack">mdi-arrow-left-bold</v-icon>
    <nav class="nav__bar">
      <ul class="nav__bar--ul">
        <li>
          <router-link v-if="!$route.meta.hideButton" @click.native="$scrollToTop" to="/home">Home</router-link>
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
export default {
  data() {
    return {
      isActive: false
    };
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

.nav-bar__container {
  position: absolute;
}

.nav__bar {
  background-color: rgba(36, 36, 36, 0.418);
  list-style: none;
  width: 100vw;
  margin-top: 50px;
}
.nav__bar--ul {
  display: flex;
  justify-content: center;
  list-style: none;
  color: rgb(218, 214, 214);
  display: flex;
  list-style: none;
  padding-left: 0px;
  list-style: none;
}

.nav__bar--ul li a:link,
.nav__bar--ul li a:visited {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 150%;
  margin-right: 40px;
  text-decoration: none;
  color: rgb(219, 219, 219);
  transition: color 0.3s;
  word-spacing: 2px;
}

.nav__bar--ul li a:hover,
.nav__bar--ul li a:active {
  color: #d35400;
}

.nav-bar__header h1,
.nav-bar__header h2 {
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 400%;
  color: rgb(54, 54, 54);
  word-spacing: 2px;
  background-color: #d354005e;
}

.nav-bar__header .nav-bar__nav {
  font-size: 200%;
}

.go-back {
  position: absolute;
  font-size: 270%;
  color: rgb(211, 211, 211);
  z-index: 9999;
  margin-top: 49px;
  margin-left: 85px;
}

.go-back:hover,
.go-back:active {
  color: #d35400;
}
</style>

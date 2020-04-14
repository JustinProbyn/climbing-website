<template>
  <div style=" z-index: 9999;" class="nav-bar__container">
    <nav class="nav__bar">
      <ul class="nav__bar--ul">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="news">News</router-link>
        </li>
        <li>
          <router-link to="pictures">Pictures</router-link>
        </li>
        <li>
          <router-link to="sport-climbing">Expertise</router-link>
        </li>
        <li>
          <router-link to="climbing-spots">Climbing spots</router-link>
        </li>
        <li>
          <router-link to="gear">Gear</router-link>
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
  methods: {},
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
}

a.router-link-active {
  font-weight: 700;
}

.nav__bar {
  background-color: rgba(36, 36, 36, 0.151);
  list-style: none;
  margin-right: 18px;
  margin-left: 18px;
}
.nav__bar--ul {
  display: flex;
  justify-content: center;
  list-style: none;
  color: rgb(218, 214, 214);
  display: flex;
  width: 100vw;
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
  color: rgb(54, 54, 54);
  transition: color 0.3s;
  word-spacing: 2px;
  list-style: none;
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
</style>

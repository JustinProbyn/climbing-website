<template>
  <div class="body">
    <header>
      <v-btn to="SignUp">Sign Up</v-btn>
      <div class="hero-text">
        <h1>Climbing Website</h1>
        <h2>
          <span>&nbsp;</span>Ascend any height.
        </h2>
      </div>

      <div class="nav__bar">
        <ul class="nav__bar--ul">
          <li>
            <router-link to="News">News</router-link>
          </li>
          <li>
            <router-link to="Training">Training</router-link>
          </li>
          <li>
            <router-link to="ClimbingSpots">Climbing spots</router-link>
          </li>
          <li>
            <router-link to="Gear">Gear</router-link>
          </li>
          <li>
            <router-link to="Pictures">Pictures</router-link>
          </li>
          <li>
            <router-link to="CompScene">Comp Scene</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
// import firebase from "firebase";
// import SignUp from "../components/SignUp.vue";

export default {
  name: "Home"
  // components: {
  //   signup: SignUp
  // }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
}

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-text {
  display: flex;
  padding: 150px;
  flex-direction: column;
  height: 30%;
  margin-left: 1000px;
  width: 100%;
}

.hero-text h1,
.hero-text h2 {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 400%;
  color: rgb(218, 214, 214);
  word-spacing: 2px;
  letter-spacing: 1px;
}

.hero-text h2 {
  font-size: 180%;
  color: #d35400;
  margin-left: 5px;
}

.nav__bar {
}

.nav__bar--ul {
  display: flex;
  justify-content: flex-end;
  margin-top: 500px;
  list-style: none;
  color: rgb(218, 214, 214);
  display: flex;
  margin-left: auto;
  margin-right: 150px;
  background-color: rgba(0, 0, 0, 0.151);
  width: 55%;
  justify-content: center;
}

.nav__bar--ul li a:link,
.nav__bar--ul li a:visited {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 150%;
  padding-right: 40px;
  text-decoration: none;
  color: rgb(218, 214, 214);
  transition: color 0.3s;
  word-spacing: 2px;
}

.nav__bar--ul li a:hover,
.nav__bar--ul li a:active {
  color: #d35400;
}
</style>

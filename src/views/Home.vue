<template v-slot:activator="{ on }">
  <v-app>
    <div class="body">
      <header>
        <div class="hero-text">
          <h1>Climbing Website</h1>
          <h2>
            <span>&nbsp;</span>Ascend any height.
          </h2>
        </div>
        <div class="nav__bar">
          <ul class="nav__bar--ul">
            <div class="btns">
              <v-row justify="center">
                <v-dialog v-model="dialog" max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-btn outlined color="#dad6d6" v-on="on" class="btn">Disclaimer</v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">Disclaimer</v-card-title>
                    <v-card-text
                      style="width: 280px"
                    >The content on this mock website is not original. It has been sourced from other websites that include climbing.co.za, climbing.com, frictionlabs.com and articlegenerator.org.</v-card-text>
                  </v-card>
                </v-dialog>
              </v-row>

              <v-btn outlined color="#d35400" class="btn" v-if="!auth" to="signup">Admin Sign Up</v-btn>
              <v-btn outlined color="#d35400" class="btn" v-if="!auth" to="signin">Admin Sign In</v-btn>
              <v-btn outlined color="#d35400" class="btn" v-if="auth" to="add-article">Add Article</v-btn>
              <v-btn outlined color="#d35400" class="btn" v-if="auth" to="add-picture">Add Picture</v-btn>
              <v-btn outlined color="#d35400" class="btn" v-if="auth" @click="signOut">Sign Out</v-btn>
            </div>
            <li>
              <router-link v-if="auth" to="news">News</router-link>
            </li>
            <li>
              <router-link v-if="auth" to="sport-climbing">Expertise</router-link>
            </li>
            <li>
              <router-link v-if="auth" to="climbing-spots">Climbing spots</router-link>
            </li>
            <li>
              <router-link v-if="auth" to="gear">Gear</router-link>
            </li>
            <li>
              <router-link v-if="auth" to="pictures">Pictures</router-link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      userLoggedIn: false
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log(" Sign-out successful.");
        })
        .catch(function(er) {
          console.log(er);
        });
      this.$store.dispatch("signOut");
      // removes store localstorage and removes state.userData
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
/*** GENERAL STYLE ***/
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

/*** HEADER ***/

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

/*** NAV BAR ***/

.nav__bar--ul {
  display: flex;
  justify-content: flex-end;
  margin-top: 500px;
  list-style: none;
  color: #dad6d6;
  display: flex;
  margin-left: auto;
  margin-right: 150px;
  background-color: rgba(0, 0, 0, 0.151);
  width: 100%;
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

/*** BUTTONS ***/

.btns {
  display: flex;
  margin-right: 12%;
}
.btn {
  margin-right: 20px;
}
</style>

<template>
  <div style=" z-index: 1;" class="nav-bar__container">
    <v-icon v-if="!$route.meta.hideButton" class="go-back" @click="goBack"
      >mdi-arrow-left-bold</v-icon
    >
    <nav class="nav__bar">
      <ul class="nav__bar--ul">
        <li>
          <router-link v-if="!$route.meta.hideButton" to="/">Home</router-link>
        </li>
        <li>
          <a id="news" @click="goTo($event)">News</a>
        </li>
        <li>
          <a id="pictures" @click="goTo($event)">Pictures</a>
        </li>
        <li>
          <router-link to="sport-climbing">Expertise</router-link>
        </li>
        <li>
          <router-link to="climbing-spots">Climbing spots</router-link>
        </li>
        <li>
          <a id="gear" @click="goTo($event)">Gear</a>
        </li>
        <li v-if="getUsername">
          <p class="nav-bar__username">
            Welcome {{ getUsername }}!
            <router-link to="user-account">
              <v-icon class="nav-bar__username-icon">mdi-account-circle</v-icon>
            </router-link>
          </p>
        </li>
      </ul>
    </nav>
    <v-app class="overlay__container">
      <v-overlay
        v-if="!auth"
        :value="overlay"
        style="z-index: 9"
        :opacity="opacity"
      >
        <p>Please signin or signup to continue.</p>

        <v-dialog class="signInDialog" max-width="500">
          <template v-slot:activator="{ on }">
            <v-btn outlined color="#d35400" v-on="on" class="btn" v-if="!auth"
              >Sign Up</v-btn
            >
          </template>
          <v-card height="538">
            <signup></signup>
          </v-card>
        </v-dialog>

        <v-dialog v-if="!auth" max-width="400">
          <template v-slot:activator="{ on }">
            <v-btn outlined color="#d35400" class="btn" v-if="!auth" v-on="on"
              >Sign In</v-btn
            >
          </template>
          <v-card height="371">
            <signin @signedIn="initLoader"></signin>
          </v-card>
        </v-dialog>
        <!-- Sign in loader -->
        <v-dialog
          v-if="!auth"
          v-model="showLoader"
          hide-overlay
          persistent
          width="300"
        >
          <v-card color="primary" dark>
            <v-card-text>
              Logging in
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-btn absolute class="btn__close" icon @click="overlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-overlay>
    </v-app>
  </div>
</template>

<script>
/**
 * The navbar that is used on every page of the website.
 * Some links are disabled according to whether a user is logged in with Firebase
 * This is done in Vue Router index.js with route guards
 */
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import firebase from "firebase";
export default {
  components: {
    signin: SignIn,
    signup: SignUp
  },
  data() {
    return {
      overlay: false,
      opacity: 0.9,
      isActive: false,
      showLoader: false
    };
  },
  methods: {
    initLoader() {
      this.showLoader = true;
    },
    goTo(event) {
      let id = event.currentTarget.id;
      console.log(event);
      this.dialog = false;
      if (firebase.auth().currentUser) {
        this.overlay = false;
        this.$router.push(id);
      } else this.overlay = true;
      this.cartPopup = false;
    },
    goBack() {
      return this.$router.go(-1);
    }
  },
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
    },
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
  -webkit-box-sizing: border-box;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  list-style: none;
  color: rgb(218, 214, 214);
  display: flex;
  list-style: none;
  padding-left: 0px;
  list-style: none;
}

.nav__bar--ul li a {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 150%;
  margin-right: 40px;
  text-decoration: none;
  color: rgb(219, 219, 219);
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  word-spacing: 2px;
}

.nav__bar--ul li a:hover,
.nav__bar--ul li a:active {
  color: #d35400;
}

.nav-bar__header h1,
.nav-bar__header h2 {
  display: -webkit-box;
  display: -ms-flexbox;
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
  z-index: 1;
  margin-top: 49px;
  margin-left: 85px;
}

.go-back:hover,
.go-back:active {
  color: #d35400;
}

.nav-bar__username {
  color: #d35400;
  position: absolute;
  margin-left: 300px;
  margin-top: -3px;
}

.nav-bar__username-icon {
  color: #d35400;
  margin-left: 5px;
}

/* OVERLAY */

.overlay__container {
  height: 0px;
}
.btn__close {
  margin-left: 700px;
  margin-top: -400px;
}
</style>

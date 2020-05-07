<template v-slot:activator="{ on }">
  <v-app>
    <div class="body">
      <header class="home__header" :key="reloadPage">
        <navbar class="nav__bar--home"></navbar>
        <div class="menu">
          <v-icon
            @click="openMenu"
            class="menu__icon"
            style="color: #d35400; font-size: 200%; cursor: pointer; margin-left: 5px"
          >mdi-menu</v-icon>
          <div class="menu__popout">
            <div
              :class="[
                  showMenu
                    ? 'animated slideInLeft faster'
                    : 'animated slideOutLeft faster'
                ]"
            >
              <div v-if="initMenu" class="btns-home">
                <v-btn outlined color="#d35400" class="btn" v-if="auth" @click="signOut">Sign Out</v-btn>

                <v-dialog v-if="!auth" max-width="500">
                  <template v-slot:activator="{ on }">
                    <v-btn outlined color="#d35400" v-on="on" class="btn" v-if="!auth">Sign Up</v-btn>
                  </template>
                  <v-card height="538">
                    <signup @signedUp="initSignupDialog"></signup>
                  </v-card>
                </v-dialog>
                <!--  -->
                <v-dialog
                  v-if="!auth && userSignedUp"
                  v-model="SignupShowDialog"
                  hide-overlay
                  persistent
                  width="300"
                >
                  <v-card class="signin__text" color="primary" dark>
                    <v-card-text class="signin__text">
                      <p style="margin-bottom: 60px">
                        Thank you for registering.
                        <br />Please sign in
                      </p>
                      <signin @signedIn="initSigninLoader"></signin>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <!--  -->

                <v-dialog v-if="!auth" max-width="400">
                  <template v-slot:activator="{ on }">
                    <v-btn outlined color="#d35400" class="btn" v-if="!auth" v-on="on">Sign In</v-btn>
                  </template>
                  <v-card height="371">
                    <signin @signedIn="initSigninLoader"></signin>
                  </v-card>
                </v-dialog>
                <!-- Sign in loader -->
                <v-dialog
                  v-if="!auth"
                  v-model="SigninShowLoader"
                  hide-overlay
                  persistent
                  width="300"
                >
                  <v-card color="primary" dark>
                    <v-card-text>
                      Logging in...
                      <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <!--  -->

                <v-btn outlined color="#d35400" class="btn" v-if="auth" to="add-article">Add Article</v-btn>
                <v-btn outlined color="#d35400" class="btn" v-if="auth" to="add-picture">Add Picture</v-btn>
                <v-dialog max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-btn outlined color="#d35400" v-on="on" class="btn">Disclaimer</v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">Disclaimer</v-card-title>
                    <v-card-text styles="padding: 20px; border: 1px solid black; width: 280px">
                      The content on this mock website is not original. It has
                      been sourced from other websites that include
                      climbing.co.za, climbing.com, frictionlabs.com and
                      articlegenerator.org.
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
            </div>
          </div>
        </div>
        <div class="header__text">
          <h1 class="animated fadeInDown">Climbing Website</h1>
          <h2 class="animated fadeInDown">
            <span>&nbsp;</span>Ascend any height.
          </h2>
        </div>
      </header>
    </div>
  </v-app>
</template>

<script>
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    navbar: NavBar,
    signin: SignIn,
    signup: SignUp
  },
  name: "Home",
  data() {
    return {
      userLoggedIn: false,
      showMenu: false,
      reloadPage: 0,
      initMenu: false,
      SigninShowLoader: false,
      SignupShowDialog: false
    };
  },
  watch: {},
  methods: {
    openMenu() {
      this.showMenu = !this.showMenu;
      this.initMenu = true;
    },
    initSigninLoader() {
      this.SigninShowLoader = true;
      if (this.auth) {
        this.reloadPage += 1;
      }
      if (!this.auth) {
        setTimeout(() => {
          this.SigninShowLoader = false;
        }, 1500);
      }
    },
    initSignupDialog() {
      this.SignupShowDialog = true;
    },
    signOut() {
      this.reloadPage += 1;
      this.$store.dispatch("firestoreSignOut");
      // removes store localstorage and removes state.userData
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
      // checks if state.userData.email exists then shows UI components based result
    },
    userSignedUp() {
      return this.$store.getters.isSignedUp;
      // checks if state.userData.email exists then shows UI components based result
    }
  }
};
</script>

<style>
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

.header__text {
  display: flex;
  flex-direction: column;
  margin-top: 35%;
}

.home__header {
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  height: 100vh;
}

.home__header h1,
.home__header h2 {
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 400%;
  color: rgb(218, 214, 214);
  word-spacing: 2px;
  letter-spacing: 1px;
  align-self: flex-end;
  margin-right: 150px;
}

.home__header h2 {
  font-size: 180%;
  color: #d35400;
  margin-left: 5px;
}

/* Signin form */

.signin__text {
  padding: 5px;
}
/*** MENU ***/

.menu {
  display: flex;
  margin-top: 52px;
  margin-left: 20px;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  z-index: 9999;
}

.menu__popout {
  display: flex;
  color: #fff;
  font-size: 200%;
}

.menu__icon {
  display: flex;
  align-self: flex-start;
}

.v-application--wrap {
  min-height: 20vh;
}

/*** BUTTONS ***/

.btns-home {
  display: flex;
  margin-right: 12%;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 5px;
}
.btn {
  margin-right: 20px;
  margin-top: 15px;
}
</style>

<template :key="reloadPage" v-slot:activator="{ on }">
  <v-app>
    <div class="body">
      <header class="home__header">
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
                <div class="permanent-btns">
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
                    width="300"
                    persistent
                  >
                    <v-card v-if="userSignedUp" class="signin__text" dark>
                      <v-card-text class="signin__text">
                        <p style="margin-bottom: 60px; text-align: center">
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

                  <v-btn
                    outlined
                    color="#d35400"
                    class="btn"
                    v-if="auth"
                    to="add-article"
                  >Add Article</v-btn>
                  <v-btn
                    outlined
                    color="#d35400"
                    class="btn"
                    v-if="auth"
                    to="add-picture"
                  >Add Picture</v-btn>
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
                <div class="nav__bar--btns">
                  <v-btn outlined color="#d35400" class="btn" v-if="auth" to="news">News</v-btn>
                  <v-btn outlined color="#d35400" class="btn" v-if="auth" to="pictures">Pictures</v-btn>
                  <v-btn outlined color="#d35400" class="btn" v-if="auth" to="expertise">Expertise</v-btn>
                  <v-btn
                    outlined
                    color="#d35400"
                    class="btn"
                    v-if="auth"
                    to="climbing-spots"
                  >Climbing Spots</v-btn>
                  <v-btn outlined color="#d35400" class="btn" v-if="auth" to="gear">Gear</v-btn>
                </div>
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
/**
 * The Home page of the website.abnf
 * An exercise mainly in styling,
 * and dispaly modals/dialogs/menus conditionally.
 * This page has the dropdown menu that lets a user sign in or sign up, and sign out.
 */
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
      this.$store.dispatch("firestoreSignOut"); //Action in firestore.js module
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
      // checks if state.userData.email exists then shows UI components based result
    },
    userSignedUp() {
      return this.$store.getters.isSignedUp; //This value is set to 'true' when a user signs up (in index.js - vuex)
    }
  }
};
</script>

<style>
/*** GENERAL STYLE ***/
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.body {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}

/*** HEADER ***/

header {
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.8)),
      to(rgba(0, 0, 0, 0.7))
    ),
    url("../../public/img/climbing.jpg");
  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.header__text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 35%;
}

.home__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 30%;
  width: 100%;
  height: 100vh;
}

.home__header h1,
.home__header h2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 400%;
  color: rgb(218, 214, 214);
  word-spacing: 2px;
  letter-spacing: 1px;
  -ms-flex-item-align: end;
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

.nav__bar--btns {
  display: none;
}

.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 52px;
  margin-left: 20px;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute;
  z-index: 9999;
}

.menu__popout {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  font-size: 200%;
}

.menu__icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.v-application--wrap {
  min-height: 20vh;
}

/*** BUTTONS ***/

.btns-home {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 12%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 5px;
}
.btn {
  margin-right: 20px;
  margin-top: 15px;

  width: 100%;
}

.v-btn__content {
  font-size: 100%;
}

.permanent-btns {
  display: flex;
  flex-direction: column;
}

/* MEDIA QUERIES */

@media screen and (max-width: 900px) {
  .nav__bar--home {
    display: none;
  }
  .home__header h1 {
    margin-top: 90px;
  }

  .home__header h2 {
    margin-top: 10px;
  }

  .btns-home {
    flex-direction: row;
    width: 100vw;
  }

  .permanent-btns,
  .nav__bar--btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: 12%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 8px;
    margin-top: 5px;
  }
  .btn {
    margin-right: 20px;
    margin-top: 15px;
  }
}

@media screen and (max-width: 780px) {
  .home__header h1 {
    font-size: 230%;
  }
  .home__header h2 {
    font-size: 180%;
    margin-top: 10px;
  }

  .header__text {
    margin-top: 330px;
  }
}

@media screen and (max-width: 540px) {
  .home__header h1 {
    font-size: 180%;
  }
  .home__header h2 {
    font-size: 130%;
  }
  .home__header h2 {
    margin-left: 0;
  }

  .header__text {
    margin-left: 10px;
  }
}

@media screen and (max-width: 460px) {
  .home__header h1 {
    font-size: 140%;
  }
  .home__header h2 {
    font-size: 100%;
    margin-top: 20px;
    margin-left: 0px;
  }
  .header__text {
    margin-left: 80px;
  }
  .btn {
    width: 70%;
  }
  .v-btn__content {
    font-size: 70%;
  }
}

@media screen and (max-width: 361px) {
  .home__header h1,
  .home__header h2 {
    font-size: 120%;
    margin-right: 100px;
  }

  .home__header h2 {
    margin-left: 10px;
    font-size: 100%;
  }

  .header__text {
    display: flex;
  }

  .btn {
    width: 65%;
  }
  .v-btn__content {
    font-size: 60%;
  }
}
</style>

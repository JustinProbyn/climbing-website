import Vue from "vue";
import Vuex from "vuex";
import gear from "./modules/gear";
import cart from "./modules/cart";
import firestore from "./modules/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      email: "",
      password: ""
    },

    articleData: [],
    pictureData: []
  },

  /*** MUTATIONS ***/
  mutations: {
    // User sign in / out Mutations
    setUser(state, userData) {
      state.userData.email = userData.email;
      state.userData.password = userData.password;
    },
    signOutUser(state) {
      state.userData.email = "";
      state.userData.password = "";
      state.articleData = [];
      state.pictureData = [];
    },

    /* Articles Mutations */

    // pushes articles into state array which are displayed under "News"
    addArticleData(state, articleData) {
      state.articleData.unshift(articleData);
    },
    // pushes picture caption into state
    addPictureData(state, pictureData) {
      state.pictureData.unshift(pictureData);
    }
  },

  /*** ACTIONS ***/
  actions: {
    // sign out removing localstorage
    signOut({ commit }) {
      localStorage.removeItem("cartData");
      localStorage.removeItem("password");
      localStorage.removeItem("email");
      commit("signOutUser");
      commit("clearCart");
    },

    /* Article Actions */

    addArticle({ commit }, articleData) {
      commit("addArticleData", articleData);
    },

    /* Add Picture Actions */

    addPicture({ commit }, pictureData) {
      commit("addPictureData", pictureData);
    }
  },

  /*** GETTERS ***/
  getters: {
    // User sign in / out Getters
    getUserData(state) {
      return state.userData;
    },
    isLoggedIn(state) {
      return state.userData.email;
    },

    // Articles Getters
    getArticleData(state) {
      return state.articleData;
    },
    getArticleId(state) {
      return state.articleID;
    },

    //Picture getters.
    getPictureData(state) {
      return state.pictureData;
    }
  },
  modules: {
    gear,
    cart,
    firestore
  }
});

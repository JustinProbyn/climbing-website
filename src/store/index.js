/**
 * The main vuex store file.
 * It houses the state, actions, mutations, and getters for
 * processing orders placed, setting the user in the state (singing in and signing out),
 * adding pictures, adding articles, and managing the sign in/sign up pop up on the home page.
 * It does not house any state, actions, mutations, and getters that interacts with Firestore, the gear in the shop,
 * or that interacts with the cart. These have their own separate modules.
 * Do note though that some actions, mutations, and getters here
 * are dispatched/commited from the previously mentioned separate modules.
 */

import Vue from "vue";
import Vuex from "vuex";
import gear from "./modules/gear";
import cart from "./modules/cart";
import firestore from "./modules/firestore";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userSignedUp: false,
    userData: {
      username: "",
      email: ""
    },

    articleData: [],
    pictureData: [],
    orderData: []
  },

  // ///////////////////////////
  // ////////MUTATIONS///////////
  mutations: {
    // User sign in / up/ out Mutations
    setUser(state, userData) {
      state.userData.email = userData.email;
      state.userData.username = userData.username;
    },
    signOutUser(state) {
      state.userData.email = "";
      state.userData.password = "";
      state.userData.username = "";
      state.articleData = [];
      state.pictureData = [];
      state.orderData = [];
    },
    setUsername(state, username) {
      state.userData.username = username;
    },
    userSignedUp(state) {
      state.userSignedUp = true;
    },
    popupClose(state) {
      state.userSignedUp = false;
    },

    /* Order mutations */
    loadOrderOnLogin(state, order) {
      state.orderData.unshift(order);
    },
    loadOrderOnRefresh(state, order) {
      state.orderData.unshift(order);
    },

    /* Article mutations */
    // pushes articles into state array which are displayed under "News"
    addArticleData(state, articleData) {
      state.articleData.unshift(articleData);
    },
    /* Picture mutations */
    // pushes picture caption into state
    addPictureData(state, pictureData) {
      state.pictureData.unshift(pictureData);
    }
  },

  // ///////////////////////////
  // ////////ACTIONS///////////

  actions: {
    // closing popup on home page for sign up
    userSignedUpPopupClose({ commit }) {
      commit("popupClose");
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

  // ///////////////////////////
  // ////////GETTERS///////////
  getters: {
    /* User sign in / up / out Getters */
    getUserData(state) {
      return state.userData;
    },
    isLoggedIn(state) {
      return state.userData.email;
    },
    isSignedUp(state) {
      return state.userSignedUp;
    },
    getUsername(state) {
      return state.userData.username;
    },

    /* Order getters */
    getOrderData(state) {
      return state.orderData;
    },

    /* Articles getters */
    getArticleData(state) {
      return state.articleData;
    },
    getArticleId(state) {
      return state.articleID;
    },

    /* Picture getters */
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

export default store;

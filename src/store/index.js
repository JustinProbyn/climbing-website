import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      email: "",
      password: ""
    },

    articleData: []
  },
  mutations: {
    // User sign in / out Mutations
    setUser(state, userData) {
      state.userData.email = userData.email;
      state.userData.password = userData.password;
      console.log(state);
    },
    signOutUser(state) {
      state.userData.email = "";
      state.userData.password = "";
      console.log(state.userData);
    },

    // Articles Mutations
    addArticleData(state, articleData) {
      state.articleData.push(articleData);
      console.log(state.articleData);
    }
  },
  actions: {
    // User sign in / out Actions
    SIGNIN_setUserAct({ commit }, userData) {
      commit("setUser", userData);
    },

    tryAutoLogin({ commit }) {
      const email = localStorage.getItem("email");
      if (!email) {
        return;
      }
      const password = localStorage.getItem("password");
      if (!password) {
        return;
      }
      commit("setUser", {
        email: email,
        password: password
      });
    },
    signOut({ commit }) {
      localStorage.removeItem("password");
      localStorage.removeItem("email");
      commit("signOutUser");
    },

    // Articles Actions
    addArticle({ commit }, articleData) {
      commit("addArticleData", articleData);
    }
  },
  getters: {
    // User sign in / out Getters
    getUserData(state) {
      return state.userData;
    },
    isLoggedIn(state) {
      return state.userData.email;
    },

    // Articles
    getArticleData(state) {
      return state.articleData;
    }
  },
  modules: {}
});

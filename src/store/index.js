import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      email: "",
      password: ""
    }
  },
  mutations: {
    setUser(state, userData) {
      state.userData.email = userData.email;
      state.userData.password = userData.password;
      console.log(state);
    },
    signOutUser(state) {
      state.userData.email = "";
      state.userData.password = "";
      console.log(state.userData);
    }
  },
  actions: {
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
    }
  },
  getters: {
    getUserData(state) {
      return state.userData;
    },
    isLoggedIn(state) {
      return state.userData.email;
    }
  },
  modules: {}
});

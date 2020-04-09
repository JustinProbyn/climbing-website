import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      email: "",
      password: ""
    },

    articleData: []
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
    },

    /* Articles Mutations */

    // pushes articles into state array which are displayed under "News"
    addArticleData(state, articleData) {
      state.articleData.push(articleData);
      console.log(state.articleData);
    }
  },

  /*** ACTIONS ***/
  actions: {
    /* Signin / Signout/ On Page Refresh Actions */

    // sets user and articles (from firestore) on sign in
    SIGNIN_setState({ commit }, userData) {
      commit("setUser", userData);
      async function data() {
        const snapshot = await firebase
          .firestore()
          .collection("articledata")
          .get();
        return snapshot.docs.map(doc => doc.data());
      }
      async function callAsync() {
        const arrayData = await data();
        for (let i = 0; i < arrayData.length; i++) {
          commit("addArticleData", arrayData[i]);
        }
      }
      callAsync();
    },

    // When page is refreshed sets user and articles (from firestore) - created() in App.vue
    // load user from local storage. Data was stored in SignIn.vue
    onRefresh({ commit }) {
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

      // load articles from firestore
      async function data() {
        const snapshot = await firebase
          .firestore()
          .collection("articledata")
          .get();
        return snapshot.docs.map(doc => doc.data());
      }
      async function callAsync() {
        const arrayData = await data();
        for (let i = 0; i < arrayData.length; i++) {
          commit("addArticleData", arrayData[i]);
        }
      }
      callAsync();
    },

    // sign out removing localstorage
    signOut({ commit }) {
      localStorage.removeItem("password");
      localStorage.removeItem("email");
      commit("signOutUser");
    },

    /* Article Actions */

    addArticle({ commit }, articleData) {
      commit("addArticleData", articleData);
    },

    // stores articles on firestore
    storeArticleData(state, articleData) {
      console.log(articleData);
      const fireStoreRef = firebase.firestore().collection("articledata");
      fireStoreRef
        .doc("articledata" + "-" + articleData.title)
        .set({
          title: articleData.title,
          subTitle: articleData.subTitle,
          url: articleData.url,
          author: articleData.author,
          textBody: articleData.textBody
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
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
    }
  },
  modules: {}
});

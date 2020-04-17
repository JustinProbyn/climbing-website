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

    articleData: [],
    pictureData: [],
    cartData: [],
    itemsInStock: {
      shoes: [],
      BDs: [],
      chalk: [],
      chalkbags: [],
      helmets: [],
      ropes: [],
      ropebags: [],
      quickdraw: [],
      carabiners: [],
      SnCs: []
    }
  },

  /*** MUTATIONS ***/
  mutations: {
    // Sets ItemsInStock

    setGearshop(state, products) {
      state.itemsInStock.BDs = products;
    },

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
    // pushes caption into state
    addPictureData(state, pictureData) {
      state.pictureData.push(pictureData);
    },

    /* Articles Mutations */
    // updates cart with newly added item
    setCart(state, cartData) {
      console.log(state.cartData);
      state.cartData.push(cartData);
      console.log(state.cartData);
    },
    // loads cart from local storage on refresh
    loadCart(state, cartData) {
      state.cartData = cartData;
    },
    clearCart(state) {
      state.cartData = [];
      localStorage.removeItem("cartData");
    },
    deleteCartItem(state, index) {
      state.cartData.splice(index, 1);
    }
  },

  /*** ACTIONS ***/
  actions: {
    /* Signin / Signout/ On Page Refresh Actions */

    // sets user and articles (from firestore) on sign in
    SIGNIN_setState({ commit }, userData) {
      commit("setUser", userData);

      //set news articles on login
      async function newsData() {
        const snapshot = await firebase
          .firestore()
          .collection("articledata")
          .get();
        return snapshot.docs.map(doc => doc.data());
      }
      async function callNewsData() {
        const arrayData = await newsData();
        for (let i = 0; i <= arrayData.length; i++) {
          commit("addArticleData", arrayData[i]);
        }
      }
      callNewsData();

      //set pictures on login
      async function pictureData() {
        const snapshot = await firebase
          .firestore()
          .collection("picturedata")
          .get();
        return snapshot.docs.map(doc => doc.data());
      }
      async function callPictureData() {
        const arrayData = await pictureData();
        for (let i = 0; i <= arrayData.length; i++) {
          commit("addPictureData", arrayData[i]);
        }
      }
      callPictureData();
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
      async function newsData() {
        const arrayData = await data();
        for (let i = 0; i < arrayData.length; i++) {
          commit("addArticleData", arrayData[i]);
        }
      }
      newsData();

      // load pictures from firestore
      async function pdata() {
        const snapshot = await firebase
          .firestore()
          .collection("picturedata")
          .get();
        return snapshot.docs.map(doc => doc.data());
      }
      async function pictureData() {
        const arrayData = await pdata();
        for (let i = 0; i < arrayData.length; i++) {
          commit("addPictureData", arrayData[i]);
        }
      }
      pictureData();

      // load cart items from local storage
      var cartData = JSON.parse(localStorage.getItem("cartData"));
      if (cartData) {
        commit("loadCart", cartData);
      } else return;
    },

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

    // stores articles on firestore
    storeArticleData(state, articleData) {
      const fireStoreRef = firebase.firestore().collection("articledata");
      fireStoreRef
        .doc("articledata" + "-" + articleData.title)
        .set({
          title: articleData.title,
          subTitle: articleData.subTitle,
          url: articleData.url,
          author: articleData.author,
          textBody: articleData.textBody,
          date: articleData.date
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },

    /* Add Picture Actions */

    addPicture({ commit }, pictureData) {
      commit("addPictureData", pictureData);
    },
    storePictureData(state, pictureData) {
      const fireStoreRef = firebase.firestore().collection("picturedata");
      const imageNumber = Math.floor(Math.random() * 1000);
      fireStoreRef
        .doc("picture" + "-" + pictureData.imageName + imageNumber)
        .set({
          imageName: pictureData.imageName,
          caption: pictureData.caption,
          url: pictureData.url
        })
        .then(function() {
          console.log("Picture successfully added!");
        })
        .catch(function(error) {
          console.error("Error adding picture: ", error);
        });
    },

    /* Cart Actions */

    clearCart({ commit }) {
      commit("clearCart");
    },

    addToCart({ commit }, cartData) {
      commit("setCart", cartData);
      localStorage.setItem("cartData", JSON.stringify(this.state.cartData));
    },
    deleteCartItem({ commit }, index) {
      commit("deleteCartItem", index);
      localStorage.setItem("cartData", JSON.stringify(this.state.cartData));
    },

    /* Gearshop Actions*/
    sendToGearshop({ commit }, products) {
      commit("setGearshop", products);
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
    },

    //Cart getters.
    getCartData(state) {
      return state.cartData;
    },

    //Gearshop getters
    getGearshopData(state) {
      return state.itemsInStock;
    }
  },
  modules: {}
});

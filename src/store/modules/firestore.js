/**
 * This module houses all actions and getters that interact with Firestore
 * so as to make it easier to replace Firestore in the future if need be.
 */

import firebase from "firebase";
import router from "../../router";

const firestore = {
  state: {},
  mutations: {},
  actions: {
    // ///////////////////////////
    // ////////ACTIONS///////////

    // signs in with firestore
    firestoreSignIn(state, userData) {
      firebase
        .auth()
        .signInWithEmailAndPassword(userData.email, userData.password)
        .catch(function(error) {
          alert(error.message);
        });
    },
    // Signs user up with Firestore
    firestoreSignUp({ commit }, userData) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then(() => {
          const fireStoreRef = firebase
            .firestore()
            .collection("userdata")
            .doc(userData.email);
          fireStoreRef.set({
            username: userData.username,
            email: userData.email,
            password: userData.password
          });
          /**
           *commit("userSignedUp") commits a mutation in index.js that sets a 'userSignedup' property value to true.
           *This property is used to display sign in/up dialog modals on the Home page
           */
          commit("userSignedUp");
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
    // Signs user out
    firestoreSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log(" Sign-out successful.");
        })
        .catch(function(er) {
          console.log(er);
        });
      localStorage.removeItem("cartData");
      localStorage.removeItem("email");
      localStorage.removeItem("username");
      commit("signOutUser"); //in index.js - resets the user in the state
      commit("clearCart"); //in cart.js - clears the cart and its localstorage
    },
    /**
     * whenUserIsLoggedIn is dispatched from main.js when the firestore auth state changes (i.e, a user signs in/up).
     * If a logged-in user is detected, this action dispatches other actions to load the news articles and pictures from firestore.
     * It also sets the username and commits the mutation in index.js to set the user in the state.
     */
    whenUserIsLoggedIn({ commit, dispatch }) {
      const user = firebase.auth().currentUser;
      if (user) {
        const fbRef = firebase
          .firestore()
          .collection("userdata")
          .doc(user.email);
        fbRef.get().then((doc) => {
          commit("setUsername", doc.data().username);
          localStorage.setItem("username", doc.data().username); //sets username in index.js store
        });
        commit("setUser", user); //sets user in index.js store
        dispatch("setNewsAndPictureData"); //This action sets pictures and news articles for authed users on login
        dispatch("setOrderDataOnLogin"); //loads a user's order when they login in
      } else {
        alert("User doesn't exist");
        return;
      }
    },
    /**Loads news articles and pictures from Firetstore. This is dispatched by the whenUserIsLoggedIn action above.**/
    setNewsAndPictureData({ commit }) {
      //Sets news articles
      async function newsData() {
        const snapshot = await firebase
          .firestore()
          .collection("articledata")
          .get();
        return snapshot.docs.map((doc) => doc.data());
      }
      async function callNewsData() {
        const arrayData = await newsData();
        for (let i = 0; i < arrayData.length; i++) {
          commit("addArticleData", arrayData[i]);
        }
      }
      callNewsData();

      //set pictures
      async function pictureData() {
        const snapshot = await firebase
          .firestore()
          .collection("picturedata")
          .get();
        return snapshot.docs.map((doc) => doc.data());
      }
      async function callPictureData() {
        const arrayData = await pictureData();
        for (let i = 0; i < arrayData.length; i++) {
          commit("addPictureData", arrayData[i]);
        }
      }
      callPictureData();
    },

    /****ORDER/PAYMENT******/
    setOrderDataOnLogin({ commit }) {
      // load order from firestore
      firebase.auth().onAuthStateChanged((user) => {
        async function odata() {
          const snapshot = await firebase
            .firestore()
            .collection("stripe_customers")
            .doc(user.uid)
            .collection("paymentsToken")
            .get();
          return snapshot.docs.map((doc) => doc.data());
        }
        async function orderData() {
          const arrayData = await odata();
          arrayData.forEach((order) => {
            commit("loadOrderOnLogin", order.payment); //mutation in index.js
          });
        }
        orderData();
      });
    },

    /***ADDING PICTURES***/
    // Uploading a picture to firestore
    submitPicture({ dispatch }, imageData) {
      const storageRef = firebase.storage().ref();
      const fileName = imageData.imageName;
      const imageNumber = Math.floor(Math.random() * 1000);
      const imageRef = storageRef.child(
        "images/" + fileName + imageNumber + ".jpg"
      );
      const file = imageData.image;
      imageRef.put(file).then(() => {
        imageRef
          .getDownloadURL()
          .then((url) => {
            const image = url;
            const pictureData = {
              url: image,
              caption: imageData.caption,
              imageName: imageData.imageName
            };
            dispatch("addPicture", pictureData); // Action in index.js - stores data for all pictures in state

            dispatch("storePictureData", pictureData);
            router.push("pictures");
          })
          .catch(function(error) {
            console.log(error);
          });
      });
    },
    // Stores pictures on firestore
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

    /***ADDING ARTICLES***/
    submitArticle({ dispatch }, articleData) {
      //Uploads image for article on firestore
      const storageRef = firebase.storage().ref();
      const fileName = articleData.imageName;
      const imageRef = storageRef.child("images/" + fileName + ".jpg");
      const file = articleData.image;
      imageRef.put(file).then(() => {
        imageRef
          .getDownloadURL()
          .then((url) => {
            // dispatches storeArticleData to store headline, text, url, etc. on firestore
            const image = url;
            var currentDate = new Date();
            var newDate = currentDate.getDate();
            var month = currentDate.getMonth();
            var year = currentDate.getFullYear();
            var date = newDate + "/" + (month + 1) + "/" + year;

            const articleTextData = {
              date: date,
              url: image,
              author: articleData.author,
              title: articleData.title,
              subTitle: articleData.subTitle,
              textBody: articleData.textBody
            };
            dispatch("addArticle", articleTextData); // Action in index.js - stores data for all articles in state
            dispatch("storeArticleData", articleTextData);
            router.push("news");
          })
          .catch(function(error) {
            console.log(error);
          });
      });
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
    /***REFRESHING PAGE***/
    // Dispatched in App.vue on created()
    // When page is refreshed, this action sets the user.
    onRefresh({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const email = user.email;
          const username = localStorage.getItem("username");

          if (!username) {
            return;
          }
          commit("setUser", {
            email: email,
            username: username
          });
        } else if (!user) {
          return;
        }
      });
    }
  },
  // ///////////////////////////
  // ////////GETTERS///////////
  getters: {}
};

export default firestore;

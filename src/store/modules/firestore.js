import firebase from "firebase";
import router from "../../router";

const firestore = {
  state: {},
  mutations: {},
  actions: {
    /***SIGNIN/SIGNOUT ACTIONS***/
    // signs in and dispatches action to set data from firestore
    firestoreSignIn({ commit, dispatch }, userData) {
      firebase
        .auth()
        .signInWithEmailAndPassword(userData.email, userData.password)
        .catch(function(error) {
          console.log(error);
        })
        .then(() => {
          if (firebase.auth().currentUser) {
            //sets username in index.js store
            const fbRef = firebase
              .firestore()
              .collection("userdata")
              .doc(userData.email);
            fbRef.get().then(doc => {
              commit("setUsername", doc.data().username);
              localStorage.setItem("username", doc.data().username);
            });
            //sets user in index.js store
            commit("setUser", userData);
            dispatch("setNewsAndPictureData");
          } else {
            alert("User doesn't exist");
            return;
          }
        });
    },
    // signs user up
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
          commit("userSignedUp");
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
    // signs out
    firestoreSignOut({ dispatch }) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log(" Sign-out successful.");
        })
        .catch(function(er) {
          console.log(er);
        });
      //this action in index.js clears cart and local storage
      dispatch("signOut");
    },
    //set news articles and pictures on login
    setNewsAndPictureData({ commit }) {
      //set news on login
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

    /***ADDING PICTURES***/
    // Uploading a picture to firestore
    submitPicture({ dispatch }, imageData) {
      // Upload file
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
          .then(url => {
            const image = url;
            const pictureData = {
              url: image,
              caption: imageData.caption,
              imageName: imageData.imageName
            };
            dispatch("addPicture", pictureData); // in index.js

            dispatch("storePictureData", pictureData); // in firestore.js
            router.push("pictures");
          })
          .catch(function(error) {
            console.log(error);
          });
      });
    },
    // store pictures on firestore
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
      console.log(articleData);
      //Uploads image for article on firestore
      const storageRef = firebase.storage().ref();
      const fileName = articleData.imageName;
      const imageRef = storageRef.child("images/" + fileName + ".jpg");
      const file = articleData.image;
      imageRef.put(file).then(() => {
        imageRef
          .getDownloadURL()
          .then(url => {
            // dispatches storeArticleData to store headline, text, url, etc.
            console.log(url);
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
            dispatch("addArticle", articleTextData);
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

      const username = localStorage.getItem("username");
      if (!password) {
        return;
      }
      commit("setUser", {
        email: email,
        password: password,
        username: username
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
    }
    /**********/
  },
  getters: {}
};

export default firestore;

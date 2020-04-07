import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VModal from "vue-js-modal";
import firebase from 'firebase'

Vue.use(VModal);

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCtd5yGoRMyhU8j1fCYPVp-cS7pqcXwGCY",
  authDomain: "climbing-website.firebaseapp.com",
  databaseURL: "https://climbing-website.firebaseio.com",
  projectId: "climbing-website",
  storageBucket: "climbing-website.appspot.com",
  messagingSenderId: "885691194006",
  appId: "1:885691194006:web:5090cdf8b2c137733b00b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
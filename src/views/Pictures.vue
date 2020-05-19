<template>
  <div class="pictures__body">
    <header>
      <navbar v-if="stickyActive == true"></navbar>
      <stickynav v-if="stickyActive == false"></stickynav>

      <div class="whitepanel">
        <div
          v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions
        }"
        ></div>
        <div class="pictures__header">
          <h1>Pictures</h1>
        </div>

        <div class="pictures__container">
          <pictures-box
            class="pictures__box--comp"
            v-for="(data, i) in getPictureData"
            :data="data"
            :key="i"
          ></pictures-box>
        </div>
      </div>
    </header>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
/**
 * The Pictures page.
 * This page displays all the pictures from PicturesBox.vue (component).
 * This page feeds PicturesBox.vue picture data as a prop so it can display the news articles.
 * The computed property 'getPictureData' receives the picture data from the store which was pulled from Firestore.
 */
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
import PicturesBox from "../components/PicturesBox.vue";
import Vue from "vue";
import VueWaypoint from "vue-waypoint";
import Footer from "../components/Footer.vue";

Vue.use(VueWaypoint);

export default {
  data: () => ({
    componentKey: 1,
    datas: [],
    stickyActive: true,
    intersectionOptions: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: [0.25, 0.75]
    }
  }),
  methods: {
    // Waypoint that triggers Stickynav
    onWaypoint({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        this.stickyActive = true;
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.stickyActive = false;
      }
    }
  },
  computed: {
    getPictureData() {
      return this.$store.getters.getPictureData;
    }
  },
  components: {
    navbar: NavBar,
    stickynav: StickyNavBar,
    picturesBox: PicturesBox,
    footerComp: Footer
  }
};
</script>

<style scoped>
/* GENERAL LAYOUT */
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
}

.pictures__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

header {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.911)), to(rgba(0, 0, 0, 0.7))),
    url("../../public/img/climbing.jpg");
  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  background-image: linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.whitepanel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-left: 5%;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-top: 150px;
  margin-bottom: 50px;
  border-radius: 5px;
}

/* TITLE */

.pictures__header h1,
.pictures__header h2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 400%;
  color: #fff;
  word-spacing: 2px;
  letter-spacing: 1px;
  justify-self: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 20px 20px;
  background-image: url("../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

h1,
h2 {
  text-transform: uppercase;
  font-weight: 300;
}

.pictures__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-right: 20px;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  height: auto;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footer {
  margin-top: 20px;
}
</style>

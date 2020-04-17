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
            v-for="data in getPictureData"
            :data="data"
            :key="data"
          ></pictures-box>
        </div>
      </div>
    </header>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
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
    stickyActive: false,
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
  box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
}

.pictures__body {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.911), rgba(0, 0, 0, 0.7)),
    url("../../public/img/climbing.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.whitepanel {
  display: flex;
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
  display: flex;
  font-size: 400%;
  color: #fff;
  word-spacing: 2px;
  letter-spacing: 1px;
  justify-self: center;
  justify-content: center;
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
  display: flex;
  width: 100%;
  margin-right: 20px;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
}

.footer {
  margin-top: 20px;
}
</style>

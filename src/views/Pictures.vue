<template>
  <div class="pictures__container">
    <div class="pictures__header">
      <h1>Pictures</h1>
      <navbar></navbar>
      <stickynav v-if="stickyActive == false"></stickynav>
    </div>
    <div
      v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions
      }"
    ></div>
    <div class="pictures__box">
      <pictures-box
        class="pictures__box--comp"
        v-for="data in getPictureData"
        :data="data"
        :key="data"
      ></pictures-box>
    </div>
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
    datas: [
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Cape Town",
      //   text:
      //     "Travel to the best outdoor experience on planet Earth. A vacation you will never forget!",
      //   caption: "CapeTown"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // },
      // {
      //   id: "#",
      //   url: require("../../public/img/cape-town-resized.jpg"),
      //   alt: "Montagu",
      //   text: "awdawdadawd never forget!",
      //   caption: "Montagu"
      // }
    ],
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.spacer {
  display: flex;
  border-bottom: 1px solid rgb(216, 214, 214);
  width: 500px;
  justify-self: center;
}

.pictures__header h1,
.pictures__header h2 {
  font-family: "Lato", "Arial", sans-serif;
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

.pictures__box {
  max-width: 100vw;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 160px;
}

.footer {
  margin-top: 20px;
}
</style>

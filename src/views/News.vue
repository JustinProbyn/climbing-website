<template>
  <div class="news__body">
    <header>
      <navbar></navbar>
      <div class="whitepanel">
        <div class="news__header">
          <h1>News</h1>
        </div>

        <div class="news__body">
          <div class="articles__container">
            <stickynav v-if="stickyActive == false"></stickynav>
            <div
              v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions
          }"
            ></div>
            <articles class="news__articles" v-for="data in getNewsData" :data="data" :key="data"></articles>
          </div>
        </div>

        <!-- </div> -->
      </div>
    </header>
    <footer-comp class="news__footer"></footer-comp>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Articles from "../components/Articles.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
import VueWaypoint from "vue-waypoint";
import Vue from "vue";

Vue.use(VueWaypoint);

export default {
  data() {
    return {
      // Waypoint options
      stickyActive: false,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.25, 0.75]
      }
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    articles: Articles,
    stickynav: StickyNavBar
  },
  computed: {
    getNewsData() {
      return this.$store.getters.getArticleData;
    }
  },
  methods: {
    // Waypoint that triggers Stickynav
    onWaypoint({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.stickyActive = true;
      }
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.stickyActive = false;
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
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
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 5px;
}

.news__header h1,
.news__header h2 {
  display: flex;
  font-family: "Lato", "Arial", sans-serif;
  text-transform: uppercase;
  font-size: 400%;
  font-weight: 300;
  color: #fff;
  word-spacing: 2px;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
  margin: 20px 20px;
  background-image: url("../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

.news__header .news__nav {
  font-size: 200%;
}

.news__header {
}

/* NEWS BODY */

.news__body {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

/* NEWS ARTICLES */

.news__articles {
  display: flex;
  margin-top: 40px;
  margin-left: 100px;
  margin-bottom: 40px;
}

.articles__container {
  display: flex;
  width: 100%;
  margin-right: 20px;
  flex-wrap: wrap;
  height: auto;
}

/* SIDE BAR */

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.sidebar__title {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
}

.sidebar__comps,
.sidebar__ascents {
  border-radius: 7px;
  display: flex;
  border: 1px solid black;
  height: 1000px;
  width: 500px;
  margin-right: 10%;
  justify-content: center;
  margin-bottom: 20px;
}

.sidebar__comps {
  height: 800px;
}

.thecrag-oembed-comps,
.thecrag-oembed-ascents {
  padding: 15px;
}

.sidebar h2 {
  font-family: "Lato", "Arial", sans-serif;
  text-transform: uppercase;
  font-size: 140%;
  font-weight: 300;
}

/* FOOTER */

.news__footer {
  display: flex;
}
</style>

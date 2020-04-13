<template>
  <div class="news__container">
    <div class="news__header">
      <h1>News</h1>
      <navbar></navbar>
      <stickynav v-if="stickyActive == false"></stickynav>
      <div
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions
        }"
      ></div>
    </div>
    <div class="news__body">
      <div class="articles__container">
        <articles
          class="news__articles"
          v-for="data in getNewsData"
          :data="data"
          :key="data"
        ></articles>
      </div>
      <div class="sidebar">
        <h2 class="sidebar__title">Global Ascents</h2>
        <div class="sidebar__ascents">
          <embed
            class="thecrag-oembed-ascents"
            src="http://www.thecrag.com/ascents?embed=1\"
            style="width: 100%;"
          />
        </div>
        <h2 class="sidebar__title">Comps</h2>
        <div class="sidebar__comps">
          <embed
            class="thecrag-oembed-comps"
            src="http://www.thecrag.com/competition?embed=1\"
            style="width: 100%;"
          />
        </div>
      </div>
    </div>
    <footer-comp></footer-comp>
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
  float: right;
  font-size: 200%;
}

/* NEWS BODY */

.news__body {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

/* NEWS ARTICLES */

.news__articles {
  display: flex;
  margin-top: 20px;
}

.articles__container {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  width: 50%;
}

/* SIDE BAR */

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sidebar__title {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
}

.sidebar__comps,
.sidebar__ascents {
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
</style>

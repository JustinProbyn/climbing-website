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
        <articles class="news__articles" v-for="data in getNewsData" :data="data" :key="data"></articles>
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
      stickyActive: false,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.25, 0.75]
      }
      // newsData:
      // [
      //   {
      //     id: "1",
      //     img: require("../../public/img/finger-strength.jpg"),
      //     sub:
      //       "Priority number one is maintaining your finger and large-pull-muscle strength.",
      //     text:
      //       "Climbing loves consistency. But since the coronavirus pandemic has shut down gyms across the country, and climbing outside is now discouraged, how do you stay strong while you’re stuck at home?",
      //     heading: "At-Home Strength Training for Rock Climbing",
      //     link: "https://www.google.com"
      //   },
      //   {
      //     id: "2",
      //     img: require("../../public/img/stefano-ghisolfi.jpg"),
      //     sub:
      //       "With limited resources at home, climbers are devising innovative ways to stay fit for whenever the Games are rescheduled.",
      //     text:
      //       "Stefano Ghisolfi occasionally climbs his kitchen table to pass the time.",
      //     heading:
      //       "Olympic Rock Climbers Are Getting Creative at Home on Lockdown",
      //     link: "https://www.google.com"
      //   },
      //   {
      //     id: "3",
      //     img: require("../../public/img/climbing-training.jpg"),
      //     sub:
      //       "Sportrock encourages people to finish the challenge in 10 minutes or less.",
      //     text:
      //       "Molly Donelan, who says that she adopted the workout from a Spartan challenge, did it in 6 minutes and 40 seconds. ",
      //     heading: "Home Gym: A Fitness Challenge With Rock Climbers",
      //     link: "https://www.google.com"
      //   },
      //   {
      //     id: "4",
      //     img: require("../../public/img/news-placeholder-img.jpg"),
      //     sub: "Brief description of article",
      //     text:
      //       "Exert from article of something interesting, like bla bla bla bla bla bla bla bla bla bla bla bla",
      //     heading: "News Article 4",
      //     link: "https://www.google.com"
      //   }
      // ]
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
  float: right;
  margin-right: 10%;
  justify-content: center;
  margin-bottom: 20px;
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

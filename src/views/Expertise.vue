<template v-slot:activator="{ on }">
  <v-app>
    <div class="expertise__container">
      <div class="expertise__header">
        <h1>Expertise</h1>
        <navbar></navbar>
        <stickynav v-if="stickyActive == false"></stickynav>
        <div
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions
          }"
        ></div>
        <div class="selected__title">{{ currentTitle }}</div>
        <div class="skill__selector">
          <div class="skill__selector--btns-box">
            <v-btn
              @click="selectSport"
              to="sport-climbing"
              outlined
              class="skill__selector--btns"
              >Sport Climbing</v-btn
            >
            <!--  -->
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" outlined class="skill__selector--btns"
                    >Belaying</v-btn
                  >
                </template>
                <v-list class="belay__list">
                  <v-list-item
                    class="belay__list--item"
                    to="top-rope-belaying"
                    @click="selectTopRopeBelay"
                  >
                    <v-list-item-title>Top Rope Belaying</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    class="belay__list--item"
                    to="lead-belaying"
                    @click="selectLeadBelay"
                  >
                    <v-list-item-title>Lead Belaying</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <!--  -->
            <v-btn
              @click="selectBoulder"
              to="bouldering"
              outlined
              class="skill__selector--btns"
              >Bouldering</v-btn
            >
            <v-btn
              @click="selectTrad"
              to="trad-climbing"
              outlined
              class="skill__selector--btns"
              >Trad Climbing</v-btn
            >
            <v-btn
              @click="selectRappel"
              to="rappelling"
              outlined
              class="skill__selector--btns"
              >Rappelling</v-btn
            >
            <v-btn
              @click="selectTrain"
              to="training"
              outlined
              class="skill__selector--btns"
              >Training</v-btn
            >
          </div>
        </div>
        <div class="expertise__body">
          <div class="main__panel">
            <router-view></router-view>
          </div>
          <div class="sidebar">
            <!-- <div class="sidebar__header">Some useful videos for all climbers</div> -->
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/Hlw9GVBs890"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/TzNH5dm1bGo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/b2v4brHpdxY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
<<<<<<< HEAD
            <div class="divider"></div>
            <div class="recent__articles--header">Recent Articles</div>
            <div class="articles__container">
              <articles
                class="news__articles"
                v-for="data in getNewsData"
                :data="data"
                :key="data"
              ></articles>
            </div>
=======
>>>>>>> aa16c50d93a8655e9a8a3f476cf7ebb477d6535e
          </div>
        </div>
      </div>
      <footer-comp></footer-comp>
    </div>
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
<<<<<<< HEAD
import Articles from "../components/Articles.vue";
=======
>>>>>>> aa16c50d93a8655e9a8a3f476cf7ebb477d6535e
export default {
  data() {
    return {
      currentTitle: "",
      // Waypoint options
      stickyActive: false,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.25, 0.75]
      }
    };
  },
  created() {
    this.currentTitle = "Sport Climbing";
    this.$router.push("sport-climbing");
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
<<<<<<< HEAD
    stickynav: StickyNavBar,
    articles: Articles
  },
  computed: {
    getNewsData() {
      return this.$store.getters.getArticleData;
    }
=======
    stickynav: StickyNavBar
>>>>>>> aa16c50d93a8655e9a8a3f476cf7ebb477d6535e
  },
  methods: {
    selectSport() {
      this.currentTitle = "Sport Climbing";
    },
    selectLeadBelay() {
      this.currentTitle = "Lead Belaying";
    },
    selectTopRopeBelay() {
      this.currentTitle = "Top Rope Belaying";
    },
    selectBoulder() {
      this.currentTitle = "Bouldering";
    },
    selectTrad() {
      this.currentTitle = "Trad Climbing";
    },
    selectRappel() {
      this.currentTitle = "Rappelling";
    },
    selectTrain() {
      this.currentTitle = "Training";
    },
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
/* ---GENERAL--- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  word-break: break-word;
  font-family: "Lato", "Arial", sans-serif;
}

.expertise__header h1,
.expertise__header h2 {
  display: flex;
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

.expertise__header .pictures__nav {
  font-size: 200%;
}

/* ---SELECTED TITLE--- */

.selected__title {
  display: flex;
  width: 90%;
  height: 50px;
  margin-left: 5%;
  font-family: "Roboto Mono", monospace;
  align-items: center;
  font-size: 250%;
  margin-top: 50px;
  margin-bottom: 30px;
  color: rgb(80, 80, 80);
  text-transform: uppercase;
  color: #d35400;
}

/* ---SKILL SELECTOR--- */

.skill__selector {
  display: flex;

  width: 55%;
  height: 50px;
  margin-left: 5%;
  align-items: center;
}

.skill__selector--btns-box {
  width: 100%;
  display: flex;
}

.skill__selector--btns {
  font-size: 70%;
  margin-right: 20px;
  text-decoration: none;
}

/* Belay List */

.belay__list {
  display: flex;
  flex-direction: column;
  text-decoration: none;
<<<<<<< HEAD
  width: 220px;
  padding: 15px;
  margin-left: -16px;
=======

  width: 170px;
>>>>>>> aa16c50d93a8655e9a8a3f476cf7ebb477d6535e
}

.belay__list--item {
  margin-left: 15px;
<<<<<<< HEAD
  text-decoration: none;
=======
>>>>>>> aa16c50d93a8655e9a8a3f476cf7ebb477d6535e
}
/* ---BODY BOXES--- */

.expertise__body {
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
}

/* sidebar */

.sidebar {
  display: flex;
  width: 35%;
  flex-direction: column;
  align-items: center;
  /* padding: 15px; */
  border-radius: 7px;
}

.sidebar__header {
  font-family: "Lato", "Arial", sans-serif;
  font-size: 150%;
  font-weight: 400;
  color: rgb(100, 99, 99);
  word-spacing: 2px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

<<<<<<< HEAD
/* news import */

.divider {
  border-top: 1px solid rgba(145, 145, 145, 0.596);
  width: 90%;
  margin-top: 40px;
}

.recent__articles--header {
  text-transform: uppercase;
  font-family: "Lato", "Arial", sans-serif;
  font-size: 140%;
  font-weight: 300;
  
}

.news__articles {
  display: flex;
  margin-top: 20px;
}

.articles__container {
  display: flex;
  flex-direction: column;
  width: 100%;
}


.articles__container:link,
.articles__container:visited {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 150%;
  padding-right: 40px;
  text-decoration: none;
  color: rgb(218, 214, 214);
  transition: color 0.3s;
  word-spacing: 2px;
}

.articles__container:hover,
.articles__container:active {
  color: #d35400;
}

=======
>>>>>>> aa16c50d93a8655e9a8a3f476cf7ebb477d6535e
/* Main panel */
.main__panel {
  display: flex;
  width: 55%;
  background-color: rgba(250, 250, 250, 0.603);
  border-radius: 8px;
  margin-right: 10px;
}
</style>

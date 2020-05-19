<template v-slot:activator="{ on }">
  <v-app>
    <div class="expertise__body">
      <header>
        <stickynav v-cloak v-if="stickyActive == false"></stickynav>
        <navbar v-if="stickyActive == true"></navbar>
        <div class="whitepanel">
          <div
            v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions
          }"
          ></div>
          <div class="expertise__header">
            <h1>Expertise</h1>
          </div>

          <div class="selected__title">{{$route.name}}</div>
          <div class="skill__selector">
            <div class="skill__selector--btns-box">
              <v-btn to="sport-climbing" outlined class="skill__selector--btns">Sport Climbing</v-btn>
              <!--  -->
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" outlined class="skill__selector--btns">Belaying</v-btn>
                  </template>
                  <v-list class="belay__list">
                    <v-list-item class="belay__list--item" to="top-rope-belaying">
                      <v-list-item-title>Top Rope Belaying</v-list-item-title>
                    </v-list-item>
                    <v-list-item class="belay__list--item" to="lead-belaying">
                      <v-list-item-title>Lead Belaying</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>

              <!--  -->
              <v-btn to="bouldering" outlined class="skill__selector--btns">Bouldering</v-btn>
              <v-btn to="trad-climbing" outlined class="skill__selector--btns">Trad Climbing</v-btn>
              <v-btn to="rappelling" outlined class="skill__selector--btns">Rappelling</v-btn>
              <v-btn to="training" outlined class="skill__selector--btns">Training</v-btn>
            </div>
          </div>
          <div class="expertise__body">
            <div class="main__panel">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </header>
    </div>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
/**
 * This is the Expertise page.
 * This is one of the first pages I created and was done
 * so mainly as a means to practice implementing nested routes.
 * The different Expertise pages are stored in 'selectedExpertise' under 'components'
 */
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
export default {
  data() {
    return {
      currentTitle: "",
      // Waypoint options
      stickyActive: true,
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
    stickynav: StickyNavBar
  },
  methods: {
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

<style>
/* ---GENERAL--- */
[v-cloak] {
  display: none;
}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  word-break: break-word;
  font-family: "Lato", "Arial", sans-serif;
}

.v-application ul {
  padding-left: 0px;
}

.expertise__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
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
  width: 100%;
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

.expertise__header h1,
.expertise__header h2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-transform: uppercase;
  font-size: 400%;
  font-weight: 300;
  color: #fff;
  word-spacing: 2px;
  letter-spacing: 1px;
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

.expertise__header .pictures__nav {
  font-size: 200%;
}

/* ---SELECTED TITLE--- */

.selected__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 50px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: "Roboto Mono", monospace;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 250%;
  margin-top: 50px;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #d35400;
}

/* ---SKILL SELECTOR--- */

.skill__selector {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  width: 100%;
  height: 50px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.skill__selector--btns-box {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.skill__selector--btns {
  font-size: 70%;
  margin-right: 20px;
  text-decoration: none;
}

/* Belay List */

.belay__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-decoration: none;
  width: 220px;
  padding: 15px;
  margin-left: -16px;
}

.belay__list--item {
  margin-left: 15px;
  text-decoration: none;
}

/* Main panel */
.main__panel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 50%;
  background-color: rgba(250, 250, 250, 0.603);
  border-radius: 8px;
  margin-right: 10px;
}
</style>

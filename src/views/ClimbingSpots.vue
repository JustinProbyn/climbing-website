<template>
  <div class="climbing-spots__container">
    <div class="climbing-spots__header">
      <h1>Climbing Spots</h1>
      <navbar></navbar>
      <stickynav v-if="stickyActive == false"></stickynav>
      <div
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
      ></div>
    </div>
    <br />

    <div class="spots__container">
      <!--  -->

      <!-- CAPE TOWN -->

      <div class="cape-town">
        <div class="places-text">
          <p class="places-title">Cape Town</p>
          <p class="places-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div class="places-btns">
            <v-btn
              @click="showCapeTown"
              class="ma-2"
              x-large
              outlined
              color="#E65100"
              >Learn more</v-btn
            >
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-cape-town"
            styles="padding: 20px"
          >
            <p>
              "CAPE TOWN Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum."
            </p>
          </modal>
        </div>
        <div class="cape-town-img"></div>
      </div>

      <!-- MONTAGU-->

      <div class="montagu">
        <div class="montagu-img"></div>
        <div class="places-text">
          <p class="places-title">Montagu</p>
          <p class="places-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div class="places-btns">
            <v-btn
              @click="showMontagu"
              class="ma-2"
              x-large
              outlined
              color="#E65100"
              >Learn more</v-btn
            >
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-montagu"
            styles="padding: 20px"
          >
            <p>
              "MONTAGU Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </modal>
        </div>
      </div>

      <!-- ROCKLANDS -->

      <div class="rocklands">
        <div class="places-text">
          <p class="places-title">Rocklands</p>
          <p class="places-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div class="places-btns">
            <v-btn
              @click="showRocklands"
              class="ma-2"
              x-large
              outlined
              color="#E65100"
              >Learn more</v-btn
            >
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-rocklands"
            styles="padding: 20px"
          >
            <p>
              "ROCKLANDS Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum."
            </p>
          </modal>
        </div>
        <div class="rocklands-img"></div>
      </div>

      <!-- WATERVAL BOVEN -->

      <div class="waterval-boven">
        <div class="waterval-boven-img"></div>
        <div class="places-text">
          <p class="places-title">Waterval Boven</p>
          <p class="places-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div class="places-btns">
            <v-btn
              @click="showWaterval"
              class="ma-2"
              x-large
              outlined
              color="#E65100"
              >Learn more</v-btn
            >
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-waterval-boven"
            styles="padding: 20px"
          >
            <p>
              "WATERVAL Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </modal>
        </div>
      </div>

      <!-- OORLOGS KLOOF -->

      <div class="oorlogs-kloof">
        <div class="places-text">
          <p class="places-title">Oorlogs Kloof</p>
          <p class="places-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div class="places-btns">
            <v-btn
              @click="showOorlogs"
              class="ma-2"
              x-large
              outlined
              color="#E65100"
              >Learn more</v-btn
            >
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-oorlogs-kloof"
            styles="padding: 20px"
          >
            <p>
              "OORLOGS Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </modal>
        </div>
        <div class="oorlogs-kloof-img"></div>
      </div>

      <!--  -->
    </div>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import StickyNavBar from "../components/StickyNavBar.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      stickyActive: false,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.25, 0.75], //  if you want a 25% offset!
      },
    };
  },
  components: {
    navbar: NavBar,
    footerComp: Footer,
    stickynav: StickyNavBar,
  },
  methods: {
    // CAPE TOWN MODAL
    showCapeTown() {
      this.$modal.show("modal-cape-town");
    },
    hideCapetown() {
      this.$modal.hide("modal-cape-town");
    },

    // MONTAGU MODAL
    showMontagu() {
      this.$modal.show("modal-montagu");
    },
    hideMontagu() {
      this.$modal.hide("modal-Montagu");
    },

    // ROCKLANDS MODAL
    showRocklands() {
      this.$modal.show("modal-rocklands");
    },
    hideRocklands() {
      this.$modal.hide("modal-rocklands");
    },

    // WATERVAL BOVEN MODAL
    showWaterval() {
      this.$modal.show("modal-waterval-boven");
    },
    hideWaterval() {
      this.$modal.hide("modal-waterval-boven");
    },

    // OORLOGS KLOOF MODAL
    showOorlogs() {
      this.$modal.show("modal-oorlogs-kloof");
    },
    hideOorlogs() {
      this.$modal.hide("modal-oorlogs-kloof");
    },

    onWaypoint({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log("going down");
        this.stickyActive = true;
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log("going up");
        this.stickyActive = false;
      }
    },
  },
};
</script>

<style scoped>
/***************************/
/******** LAYOUT ***********/

* {
  background-color: rgb(240, 240, 240);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin-bottom: 0;
}

.climbing-spots__header h1,
.climbing-spots__header h2 {
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
  margin: 20px;
  background-image: url("../../public/img/climbing-header-3.jpg");
  height: 200px;
  background-position: 80%;
  background-size: 100%;
}

.climbing-spots__header .climbing-spots__nav {
  font-size: 200%;
}

.spots__container {
  display: flex;
  flex-direction: column;
}

.spacer {
  display: flex;
  border-bottom: 1px solid rgb(216, 214, 214);
  width: 100vw;
  justify-self: center;
}

/* BUTTONS */

.places-btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 17px;
  margin-top: 10px;
}

/***************************/
/******** PLACES ***********/

.places-text {
  width: 50%;
  box-shadow: 2px 2px 2px rgb(224, 222, 222);
}

.places-title {
  padding: 20px 20px 0 20px;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 150%;
}

.places-body {
  padding: 20px;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  font-size: 130%;
}

.cape-town,
.montagu,
.rocklands,
.waterval-boven {
  display: flex;
  width: 100%;
  height: 400px;
  padding: 10px;
  margin-bottom: 10px;
}

.oorlogs-kloof {
  display: flex;
  width: 100%;
  height: 400px;
  padding: 10px 10px;
}

/* CAPE TOWN */

.cape-town-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.089)),
    url("../../public/img/cape-town.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  border: 1px solid #000;
  box-shadow: 5px 2px 5px rgb(187, 186, 186);
}

/* MONTAGU*/

.montagu-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.089)),
    url("../../public/img/montagu-fake.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  box-shadow: 5px 2px 5px rgb(187, 186, 186);
}

/* ROCKLANDS */

.rocklands-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.089)),
    url("../../public/img/rocklands-fake.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  box-shadow: 5px 2px 5px rgb(187, 186, 186);
}

/* WATERVAL BOVEN */

.waterval-boven-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.089)),
    url("../../public/img/waterval-boven-fake.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  box-shadow: 5px 2px 5px rgb(187, 186, 186);
}

/* OORLOGS KLOOF */

.oorlogs-kloof-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.089)),
    url("../../public/img/oorlogs-kloof-fake.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;

  box-shadow: 5px 2px 5px rgb(187, 186, 186);
}
</style>

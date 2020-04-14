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
          options: intersectionOptions
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
          <p
            class="places-body"
          >The Cape is full of mountains and provides a mecca of climbing. Cape Town being the main center is a good base to start from. There are a few clubs mainly the MCSA Cape Town Section which has over 1200 members and a bouldering wall in their club room. The University also has a good bouldering wall and there is a climbing gym in Cape Town too. Good climbing is only a few minutes drive from Cape Town and the furthermost areas about 4-5 hours away.</p>
          <div class="places-btns">
            <v-btn @click="showCapeTown" class="ma-2" x-large outlined color="#E65100">Learn more</v-btn>
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-cape-town"
            styles="padding: 20px"
          >
            <p>With winter rainfall which often sets in and hot conditions in summer, spring and autumn are the best times to visit. Most of the areas are relatively safe and guidebooks cover most of the areas and are available from the MCSA, Mountain Mail Order and the climbing stores. The best areas are Rocklands for bouldering, Montagu and Oudtshoorn for sport routes and Table Mountain, Du Toit's Kloof (1hr from Cape Town) and Cederberg (3 hrs from Cape Town) for trad routes.</p>
          </modal>
        </div>
        <div class="cape-town-img"></div>
      </div>

      <!-- MONTAGU-->

      <div class="montagu">
        <div class="montagu-img"></div>
        <div class="places-text">
          <p class="places-title">Montagu</p>
          <p
            class="places-body"
          >Montagu is recognised as one of the most outstanding climbing destinations in South Africa due to the quality and number of climbing routes available. Montagu’s rock walls offer a wide variety of climbing opportunities at every level from beginner to expert. The charming town of Montagu is situated in the Klein Karoo (semi desert region) on the east side of the Langeberg mountain range 2 hours / 200km drive east of Cape Town. Montagu is well known for it’s hot mineral springs as well as climbing and mountain biking.</p>
          <div class="places-btns">
            <v-btn @click="showMontagu" class="ma-2" x-large outlined color="#E65100">Learn more</v-btn>
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-montagu"
            styles="padding: 20px"
          >
            <p>Once a sleepy little Karoo town where not much happened, the town has since transformed into a vibrant energetic holiday destination. Montagu’s hot springs were first documented in the late 1700′s. The hot spring water comes out at 43° C from a fissure estimated to be 3km deep and is unaffected by drought. In 1877, Thomas Bain built the Cogmans Kloof pass and the tunnel that trade began to develop the area. Between 1902 and 1985 the Brink Brother’s enterprises were of major significance to the town. Their activities included general dealers, bottling works, canning factory, dried fruit production and a department store. In 1936 Montagu was declared a health resort. This resulted in an influx of wealthy people purchasing holiday houses.</p>
          </modal>
        </div>
      </div>

      <!-- ROCKLANDS -->

      <div class="rocklands">
        <div class="places-text">
          <p class="places-title">Rocklands</p>
          <p
            class="places-body"
          >Rocklands is found in the Cederberg mountains 250km/3 hours north of Cape Town. It is a very beautiful area in a semi-desert setting, very isolated and very safe. Rocklands is undoubtedly famous for it's world class bouldering but this should not deter you from sampling the fine sport climbing. There is a large variety of quality climbing of all grades in both bouldering and sport climbing. All the sport routes are single pitch and you will have to do a small amount of walking to get to the different areas.</p>
          <div class="places-btns">
            <v-btn @click="showRocklands" class="ma-2" x-large outlined color="#E65100">Learn more</v-btn>
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-rocklands"
            styles="padding: 20px"
          >
            <p>Most of the original climbing is situated on CapeNature land and thus day or week permits must be obtained. Permits for bouldering are not covered by Wild Cards. Many of the newer areas being developed are on private farms some which have small (30-40 rand) day fees. The rock is a fine grain sandstone of medium hardness, excellent for climbing on due to its varied features. It is quite rough so you will surely need to plan rest days to re-grow some skin.</p>
          </modal>
        </div>
        <div class="rocklands-img"></div>
      </div>

      <!-- WATERVAL BOVEN -->

      <div class="waterval-boven">
        <div class="waterval-boven-img"></div>
        <div class="places-text">
          <p class="places-title">Waterval Boven</p>
          <p
            class="places-body"
          >Waterval Boven – ‘Boven (aka The Restaurant at the End of the Universe crags) – is arguably South Africa’s best sport climbing area. These crags attract year round international visitors ever since articles were published in 1993 in the German magazine Rotpunkt as well as in other media. It has become famous for its good selection of great quality routes (over 1000 of them!) of all grades that are easily accessible.</p>
          <div class="places-btns">
            <v-btn @click="showWaterval" class="ma-2" x-large outlined color="#E65100">Learn more</v-btn>
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-waterval-boven"
            styles="padding: 20px"
          >
            <p>
              A PDF guide covers almost everything and can be downloaded
              <a
                href="http://www.climbing.co.za/areas/waterval-boven"
                target="_blank"
              >here</a> for free
            </p>
          </modal>
        </div>
      </div>

      <!-- OORLOGS KLOOF -->

      <div class="oorlogs-kloof">
        <div class="places-text">
          <p class="places-title">Oorlogs Kloof</p>
          <p
            class="places-body"
          >There are several crags in Oorlogs Kloof with +/- 40 routes. There are also a number of trad routes. Most of the walls are north facing (best visited when the weather is cooler), but some are in gulleys and a few face south (all day shade). The routes vary from 8-30m long and from slabs to overhanging walls.</p>
          <div class="places-btns">
            <v-btn @click="showOorlogs" class="ma-2" x-large outlined color="#E65100">Learn more</v-btn>
          </div>
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-oorlogs-kloof"
            styles="padding: 20px"
          >
            <p>There are several crags in Oorlogs Kloof with +/- 40 routes. There are also a number of trad routes. Most of the walls are north facing (best visited when the weather is cooler), but some are in gulleys and a few face south (all day shade). The routes vary from 8-30m long and from slabs to overhanging walls.</p>
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
    stickynav: StickyNavBar
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
/***************************/
/******** LAYOUT ***********/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
}

.app {
  margin-bottom: 0;
}

.climbing-spots__header h1,
.climbing-spots__header h2 {
  display: flex;

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

.climbing-spots__container {
  background-color: rgb(240, 240, 240);
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

/* MODAL */

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
  font-size: 120%;
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

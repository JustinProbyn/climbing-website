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
          <p class="places-body">
            The Cape is full of mountains and provides a mecca of climbing. Cape
            Town being the main center is a good base to start from. There are a
            few clubs mainly the MCSA Cape Town Section which has over 1200
            members and a bouldering wall in their club room. The University
            also has a good bouldering wall and there is a climbing gym in Cape
            Town too. Good climbing is only a few minutes drive from Cape Town
            and the furthermost areas about 4-5 hours away.
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
            <v-btn
              @click="showCapeTownMap"
              class="ma-2 map-btn"
              x-large
              outlined
              color="#E65100"
              >Climbing Map</v-btn
            >
          </div>

          <!-- CT Text Modal -->
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-cape-town"
            styles="padding: 20px"
          >
            <p>
              With winter rainfall which often sets in and hot conditions in
              summer, spring and autumn are the best times to visit. Most of the
              areas are relatively safe and guidebooks cover most of the areas
              and are available from the MCSA, Mountain Mail Order and the
              climbing stores. The best areas are Rocklands for bouldering,
              Montagu and Oudtshoorn for sport routes and Table Mountain, Du
              Toit's Kloof (1hr from Cape Town) and Cederberg (3 hrs from Cape
              Town) for trad routes.
            </p>
          </modal>
          <!--  -->

          <!-- CT MAP MODAL -->
          <modal
            style="z-index: 9999"
            width="1140px"
            height="auto"
            name="modal-cape-town-map"
            styles="padding: 20px"
          >
            <div>
              <l-map
                :zoom="zoom"
                :center="center"
                style="height: 500px; width: 100%"
              >
                <l-tile-layer :url="url" :attribution="attribution" />

                <l-polygon
                  :lat-lngs="polygonTB.latlngs"
                  :color="polygonTB.color"
                >
                  <l-popup content="Table Mountain: 142" />
                </l-polygon>
                <l-polygon
                  :lat-lngs="polygonGK.latlngs"
                  :color="polygonGK.color"
                >
                  <l-popup content="Grootkop: 1" />
                </l-polygon>
                <l-polygon
                  :lat-lngs="polygonAL.latlngs"
                  :color="polygonAL.color"
                >
                  <l-popup content="Africa Ledge: 24" />
                </l-polygon>
                <l-polygon
                  :lat-lngs="polygonHV.latlngs"
                  :color="polygonHV.color"
                >
                  <l-popup content="Higgovale Quarry: 32" />
                </l-polygon>
              </l-map>
            </div>
          </modal>
          <!--  -->
        </div>
        <div class="cape-town-img"></div>
      </div>

      <!-- MONTAGU-->

      <div class="montagu">
        <div class="montagu-img"></div>
        <div class="places-text">
          <p class="places-title">Montagu</p>
          <p class="places-body">
            Montagu is recognised as one of the most outstanding climbing
            destinations in South Africa due to the quality and number of
            climbing routes available. Montagu’s rock walls offer a wide variety
            of climbing opportunities at every level from beginner to expert.
            The charming town of Montagu is situated in the Klein Karoo (semi
            desert region) on the east side of the Langeberg mountain range 2
            hours / 200km drive east of Cape Town. Montagu is well known for
            it’s hot mineral springs as well as climbing and mountain biking.
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
              Once a sleepy little Karoo town where not much happened, the town
              has since transformed into a vibrant energetic holiday
              destination. Montagu’s hot springs were first documented in the
              late 1700′s. The hot spring water comes out at 43° C from a
              fissure estimated to be 3km deep and is unaffected by drought. In
              1877, Thomas Bain built the Cogmans Kloof pass and the tunnel that
              trade began to develop the area. Between 1902 and 1985 the Brink
              Brother’s enterprises were of major significance to the town.
              Their activities included general dealers, bottling works, canning
              factory, dried fruit production and a department store. In 1936
              Montagu was declared a health resort. This resulted in an influx
              of wealthy people purchasing holiday houses.
            </p>
          </modal>
        </div>
      </div>

      <!-- ROCKLANDS -->

      <div class="rocklands">
        <div class="places-text">
          <p class="places-title">Rocklands</p>
          <p class="places-body">
            Rocklands is found in the Cederberg mountains 250km/3 hours north of
            Cape Town. It is a very beautiful area in a semi-desert setting,
            very isolated and very safe. Rocklands is undoubtedly famous for
            it's world class bouldering but this should not deter you from
            sampling the fine sport climbing. There is a large variety of
            quality climbing of all grades in both bouldering and sport
            climbing. All the sport routes are single pitch and you will have to
            do a small amount of walking to get to the different areas.
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
              Most of the original climbing is situated on CapeNature land and
              thus day or week permits must be obtained. Permits for bouldering
              are not covered by Wild Cards. Many of the newer areas being
              developed are on private farms some which have small (30-40 rand)
              day fees. The rock is a fine grain sandstone of medium hardness,
              excellent for climbing on due to its varied features. It is quite
              rough so you will surely need to plan rest days to re-grow some
              skin.
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
            Waterval Boven – ‘Boven (aka The Restaurant at the End of the
            Universe crags) – is arguably South Africa’s best sport climbing
            area. These crags attract year round international visitors ever
            since articles were published in 1993 in the German magazine
            Rotpunkt as well as in other media. It has become famous for its
            good selection of great quality routes (over 1000 of them!) of all
            grades that are easily accessible.
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
              A PDF guide covers almost everything and can be downloaded
              <a
                href="http://www.climbing.co.za/areas/waterval-boven"
                target="_blank"
                >here</a
              >
              for free
            </p>
          </modal>
        </div>
      </div>

      <!-- OORLOGS KLOOF -->

      <div class="oorlogs-kloof">
        <div class="places-text">
          <p class="places-title">Oorlogs Kloof</p>
          <p class="places-body">
            There are several crags in Oorlogs Kloof with +/- 40 routes. There
            are also a number of trad routes. Most of the walls are north facing
            (best visited when the weather is cooler), but some are in gulleys
            and a few face south (all day shade). The routes vary from 8-30m
            long and from slabs to overhanging walls.
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
              There are several crags in Oorlogs Kloof with +/- 40 routes. There
              are also a number of trad routes. Most of the walls are north
              facing (best visited when the weather is cooler), but some are in
              gulleys and a few face south (all day shade). The routes vary from
              8-30m long and from slabs to overhanging walls.
            </p>
            <div class="YT">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jqf58lQTdY8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
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
import {
  LMap,
  LTileLayer,
  // LCircle,
  // LRectangle,
  LPolygon,
  // LPolyline,
  LPopup
  // LTooltip
} from "vue2-leaflet";
import { latLng } from "leaflet";

import StickyNavBar from "../components/StickyNavBar.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      // Leaflet
      zoom: 10,
      center: [-33.918861, 18.4233],
      circle: {
        center: latLng(-33.990548, 18.37547),
        radius: 50
      },
      // rectangle: {
      //   bounds: [
      //     [47.341456, -1.397133],
      //     [47.303901, -1.243813]
      //   ],
      //   color: "red"
      // },
      polygonGK: {
        latlngs: [
          [-33.98926146295228, 18.374157444189272],
          [-33.990079866400244, 18.37248374576398],
          [-33.992161422259514, 18.371904388616763],
          [-33.99434522199156, 18.375085488508425],
          [-33.994165093995015, 18.37659020776578],
          [-33.99391491558852, 18.377192363689623],
          [-33.99352241198184, 18.377837434957705],
          [-33.99231931597587, 18.378891543100558],
          [-33.990404556888684, 18.3772419845564]
        ],
        color: "#e67e22"
      },
      polygonHV: {
        latlngs: [
          [-33.94207106623959, 18.400656553975104],
          [-33.94255615134218, 18.401643606892584],
          [-33.9429700291068, 18.401192995778082],
          [-33.94266740900354, 18.40047416376209],
          [-33.94233808590411, 18.40050098585224]
        ],
        color: "#ff00ff"
      },
      polygonAL: {
        latlngs: [
          [-33.95738117652143, 18.40340462866563],
          [-33.95670484463528, 18.403034483821575],
          [-33.9570578975068, 18.40359849971129],
          [-33.95739315078089, 18.404323448141895],
          [-33.95757865664648, 18.404813114175735],
          [-33.95783707222324, 18.40526401984418],
          [-33.95814922454298, 18.40503930339489],
          [-33.9579003960959, 18.40455680032619]
        ],
        color: "#e67e22"
      },
      polygonTB: {
        latlngs: [
          [-33.962966943578344, 18.386297312150564],
          [-33.98047735750262, 18.37462433851775],
          [-33.993002920408884, 18.35917481459197],
          [-33.998838063593205, 18.349046793351736],
          [-34.007945778663974, 18.350076761613455],
          [-34.00225357119536, 18.38741311110076],
          [-33.996845620737226, 18.398249235520925],
          [-33.993002920408884, 18.402218904862966],
          [-33.98802138353731, 18.406703558335867],
          [-33.98360892129344, 18.40809830702361],
          [-33.98168729355271, 18.42586525953826],
          [-33.966917778765804, 18.436980333695974],
          [-33.96038634404443, 18.442881193528738],
          [-33.95712933771505, 18.45084198988494],
          [-33.945470724984155, 18.460648146043386],
          [-33.938795227763734, 18.439211931596365],
          [-33.952501682611334, 18.419513788590994],
          [-33.947695774396244, 18.40934285200652],
          [-33.943459230258085, 18.39711197889861],
          [-33.945310519181746, 18.390760507951345],
          [-33.9514337264619, 18.394559493531744],
          [-33.956986952080136, 18.389237990846198]
        ],
        color: "#ff00ff",
        fillOpacity: 0.75
      },
      polyline: {
        type: "polyline",
        latlngs: [
          [47.334852, -1.509485],
          [47.342596, -1.328731],
          [47.241487, -1.190568],
          [47.234787, -1.358337]
        ],
        color: "green"
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

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
    stickynav: StickyNavBar,
    LMap,
    LTileLayer,
    // LCircle,
    // LRectangle,
    LPolygon,
    // LPolyline,
    LPopup
    // LTooltip
  },
  methods: {
    // CAPE TOWN MODALS
    showCapeTown() {
      this.$modal.show("modal-cape-town");
    },
    hideCapetown() {
      this.$modal.hide("modal-cape-town");
    },
    showCapeTownMap() {
      this.$modal.show("modal-cape-town-map");
    },
    hideCapetownMap() {
      this.$modal.hide("modal-cape-town-map");
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
    },
    // Leaflet
    TB() {
      this.$modal.show;
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

.map-btn {
  margin-left: 20px;
}

/* MODAL */

.YT {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

/* Leaflet */

#mapid {
  height: 180px;
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

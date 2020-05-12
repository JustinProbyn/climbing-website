<template>
  <v-app>
    <div class="add-picture__body">
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
          <div class="add-picture__header">
            <h1>Add Picture</h1>
          </div>

          <div>
            <div class="add-picture-box">
              <div class="page__content">
                <div class="inputs">
                  <!-- IMAGE AND IMAGE AND NAME -->
                  <input class="file" type="file" @change="onFileSelected" />
                  <div class="image__name-box">
                    <v-text-field
                      v-model="imageData.imageName"
                      outlined
                      clearable
                      label="Image Name"
                      type="text"
                    ></v-text-field>
                  </div>
                  <!-- IMAGE SUB -->
                  <div class="image__caption-box">
                    <v-text-field
                      v-model="imageData.caption"
                      outlined
                      clearable
                      label="Image Caption"
                      type="text"
                    ></v-text-field>
                  </div>
                </div>

                <!-- BUTTON -->
                <div class="btn__box">
                  <v-btn outlined color="#d35400" class="btn" @click="submitPicture">Submit</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer-comp></footer-comp>
    </div>
  </v-app>
</template>

<script>
/**
 * The add picture component of the website.
 * Allows users that have signed in to add articles to Pictures.vue
 * This functionality is for development purposes only
 * and servces as experience and practice for this portfolio piece.
 */
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
import Footer from "../components/Footer.vue";
import VueWaypoint from "vue-waypoint";
import Vue from "vue";
Vue.use(VueWaypoint);
export default {
  data() {
    return {
      imageData: {
        image: null,
        imageName: "",
        caption: ""
      },

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
    onFileSelected(event) {
      this.imageData.image = event.target.files[0];
    },
    submitPicture() {
      this.$store.dispatch("submitPicture", this.imageData); //Action in firestore.js
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
/* LAYOUT */

.add-picture__body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
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
.add-picture__header h1,
.add-picture__header h2 {
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

.add-picture-box {
  display: flex;
  justify-content: center;
  width: 100vw;
  flex-direction: column;
  margin-top: 20px;
}

.inputs {
  max-width: 300px;
}

.btn__box {
  justify-content: flex-start;
  margin-bottom: 50px;
  margin-top: 20px;
}

.btn {
  max-width: 120px;
  padding: 20px;
}

.text__body {
  height: 100%;
  width: 100vh;
}

.file {
  margin-top: 30px;
}

.page__content {
  margin-left: 3%;
  margin-top: 3%;
}

.image__name-box {
  margin-top: 25px;
}
</style>

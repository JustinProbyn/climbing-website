<template>
  <v-app>
    <div class="add-article__header">
      <h1>Add Article</h1>
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
    <div class="add-article-box">
      <div class="inputs">
        <!-- AUTHOR -->

        <v-text-field v-model="author" outlined clearable label="Author" type="text"></v-text-field>

        <!-- TITLE -->

        <v-text-field v-model="title" outlined clearable label="Title" type="text"></v-text-field>

        <!-- SUB TITLE -->

        <v-text-field v-model="subTitle" outlined clearable label="Sub Title" type="text"></v-text-field>
      </div>

      <!-- TEXT BODY -->
      <div class="text__body">
        <v-text-field
          counter
          full-width
          single-line
          v-model="textBody"
          clearable
          label="Text Body"
          type="text"
        >
          <template v-slot:preppend-inner>
            <img width="24" height="24" src="../../public/img/pencil.png" alt />
          </template>
        </v-text-field>
      </div>

      <!--  -->
    </div>
    <footer-comp></footer-comp>
  </v-app>
</template>



<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import VueWaypoint from "vue-waypoint";
import Vue from "vue";
Vue.use(VueWaypoint);
export default {
  data() {
    return {
      author: "",
      title: "",
      subTitle: "",
      textBody: "",
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
    footerComp: Footer
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
.add-article__header h1,
.nadd-article__header h2 {
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

.add-article-box {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-left: 2%;
  margin-top: 40px;
}

.inputs {
  max-width: 300px;
}

.text__body {
  max-width: 95%;
}
</style>

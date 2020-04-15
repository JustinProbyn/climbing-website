<template>
  <v-app>
    <div class="training__container">
      <div class="training__header">
        <h1>training</h1>
        <navbar></navbar>
      </div>
      <div class="training__body">
        <div class="content">
                  <v-row justify="space-around">
          <v-menu bottom origin="center center" transition="scale-transition">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Scale Transition</v-btn>
              
            </template>

            <v-list>
              <v-list-item v-for="(skillLevel, index) in skillLevels" :key="index" @click="method">
                <v-list-item-title>{{ skillLevel.level }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
        </div>
        <div class="sidebar"></div>

      </div>
      <footer-comp></footer-comp>
    </div>
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
export default {
  data: () => ({
    skillLevels: [{ level: "Beginner" }, { level: "Intermediate" }]
  }),
  methods: {
    method() {
      console.log("HI");
    }
  },

  components: {
    navbar: NavBar,
    footerComp: Footer
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.training__header h1,
.training__header h2 {
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

.training__header .pictures__nav {
  float: right;
  font-size: 200%;
}
</style>

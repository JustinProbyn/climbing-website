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
    <div>
      <div class="add-article-box">
        <div class="page__content">
          <div class="inputs">
            <!-- AUTHOR -->

            <v-text-field
              v-model="author"
              outlined
              clearable
              label="Author"
              type="text"
            ></v-text-field>

            <!-- TITLE -->

            <v-text-field
              v-model="title"
              outlined
              clearable
              label="Title"
              type="text"
            ></v-text-field>

            <!-- SUB TITLE -->

            <v-text-field
              v-model="subTitle"
              outlined
              clearable
              label="Sub Title"
              type="text"
            ></v-text-field>

            <input class="file" type="file" @change="onFileSelected" />
            <div class="image__name-box">
              <v-text-field
                v-model="imageName"
                outlined
                clearable
                label="Image Name"
                type="text"
              ></v-text-field>
            </div>
          </div>

          <!-- TEXT BODY -->
          <div class="text__body">
            <v-textarea
              v-model="textBody"
              label="Text Body"
              counter
              auto-grow
              multi-line
            ></v-textarea>
          </div>

          <!--  -->
          <div class="btn__box">
            <v-btn outlined color="#d35400" class="btn" @click="submitArticle"
              >Submit</v-btn
            >
          </div>
        </div>
      </div>
    </div>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import StickyNavBar from "../components/StickyNavBar.vue";
import Footer from "../components/Footer.vue";
import VueWaypoint from "vue-waypoint";
import Vue from "vue";
import firebase from "firebase";
Vue.use(VueWaypoint);
export default {
  data() {
    return {
      image: null,
      imageName: "",
      author: "",
      title: "",
      subTitle: "",
      textBody: "",
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
    onFileSelected(event) {
      this.image = event.target.files[0];
    },
    // uploadImage() {
    //   const storageRef = firebase.storage().ref();
    //   const fileName = this.imageName;
    //   const imageRef = storageRef.child("images/" + fileName + ".jpg");
    //   const file = this.image;
    //   imageRef.put(file);
    // },
    submitArticle() {
      // Upload file
      const storageRef = firebase.storage().ref();
      const fileName = this.imageName;
      const imageRef = storageRef.child("images/" + fileName + ".jpg");
      const file = this.image;
      imageRef.put(file).then(() => {
        imageRef
          .getDownloadURL()
          .then(url => {
            console.log(url);
            const image = url;

            var currentDate = new Date();

            var newDate = currentDate.getDate();
            var month = currentDate.getMonth(); //Be careful! January is 0 not 1
            var year = currentDate.getFullYear();

            var date = newDate + "/" + (month + 1) + "/" + year;

            const articleData = {
              date: date,
              url: image,
              author: this.author,
              title: this.title,
              subTitle: this.subTitle,
              textBody: this.textBody
            };
            this.$store.dispatch("addArticle", articleData);
            this.$store.dispatch("storeArticleData", articleData);
            this.$router.push("news");
          })
          .catch(function(error) {
            console.log(error);
          });
      });
      // Get file
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
  width: 100vw;
  flex-direction: column;
  margin-top: 20px;
  background-color: rgba(179, 179, 179, 0.151);
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

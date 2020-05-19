<template>
  <div :key="reload" class="photo__content">
    <template>
      <v-card class="mx-auto" max-width="344" max-height="360">
        <div class="img__container" @click="show">
          <img id="img" height="280" :src="data.url" :alt="data.imageName" />
          <div class="img__overlay">
            <div class="text">Enlarge</div>
          </div>
        </div>

        <v-card-text class="card__text">
          <h2 class="title primary--text card__text">{{ data.imageName }}</h2>
          {{ data.caption }}
        </v-card-text>

        <!-- Modal of enlarged image -->
        <modal style="z-index: 9999" width="1000px" height="auto" :name="data.imageName">
          <img :src="data.url" alt="Image"/>
        </modal>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  /**
   * This is the component used in Pictures.vue (in views)
   * It displays the pictures each with their own modal to expand
   */
  data() {
    return {
      reload: 1
    };
  },
  props: {
    // Receives all the data about an image as a prop from Pictures.vue
    data: Object
  },
  methods: {
    show() {
      this.$modal.show(this.data.imageName);
    },
    hide() {
      this.$modal.hide(this.data.imageName);
    }
  }
};
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: "Lato", "Arial", sans-serif;
}
/* CARD BODY */
.photo__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 1140px;
  justify-self: center;
  margin-top: 35px;
  margin-bottom: 40px;
  margin-right: 140px;
  -webkit-box-shadow: 5px 2px 5px rgb(187, 186, 186);
          box-shadow: 5px 2px 5px rgb(187, 186, 186);
  border-radius: 4px;
}

/* PHOTO CARDS */
.photo__card {
  height: 400px;
  border-radius: 4px;
}

.card__text {
  text-align: center;
  font-family: "Lato", "Arial", sans-serif;
}

.card__text h2 {
  font-size: 120%;
}

.img__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  -webkit-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
  background-color: #d35400;
  border-radius: 4px;
}

.text {
  color: rgb(255, 255, 255);
  font-size: 20px;
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate;
  cursor: pointer;
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, -webkit-transform 0.5s;
  -o-transition: transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;
}

#img {
  width: 100%;
  height: 280px;
  -o-object-fit: cover;
     object-fit: cover;
  opacity: 1;
  -webkit-transition: opacity 0.8s, -webkit-transform 0.8s;
  transition: opacity 0.8s, -webkit-transform 0.8s;
  -o-transition: transform 0.8s, opacity 0.8s;
  transition: transform 0.8s, opacity 0.8s;
  transition: transform 0.8s, opacity 0.8s, -webkit-transform 0.8s;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.img__container:hover .img__overlay {
  opacity: 0.8;
  cursor: pointer;
}

.img__container:hover .img__overlay .text {
  opacity: 1;
}
</style>

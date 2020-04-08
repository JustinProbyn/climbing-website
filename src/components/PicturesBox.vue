<template>
  <div class="p__container">
    <div class="photo__content">
      <v-hover class="photo__card">
        <template v-slot:default="{ hover }">
          <v-card class="mx-auto" max-width="344" max-height="360">
            <v-img :src="data.url" :alt="data.alt"></v-img>

            <v-card-text class="card__text">
              <h2 class="title primary--text card__text">{{ data.caption }}</h2>
              {{ data.text }}
            </v-card-text>

            <v-expand-transition>
              <v-overlay v-if="hover" absolute color="#d35400">
                <v-btn @click="show">Englarge</v-btn>
                <modal @before-close="beforeOpen" width="1140px" height="auto" name="img">
                  <img :src="data.url" />
                </modal>
              </v-overlay>
            </v-expand-transition>
          </v-card>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: Object
  },
  methods: {
    show() {
      this.$modal.show("img");
    },
    hide() {
      this.$modal.hide("img");
    },
    beforeOpen() {}
  }
};
</script>

<style scoped>
.photo__content {
  display: flex;
  max-width: 1140px;
  justify-self: center;
  margin-top: 35px;
  margin-bottom: 10px;
  margin-right: 140px;
  box-shadow: 5px 2px 5px rgb(187, 186, 186);
}

/* ***************** */
/* PHOTO CARDS */

.photo__card {
  height: 400px;
}

.card__text {
  text-align: center;
  font-family: "Lato", "Arial", sans-serif;
}

.card__text h2 {
  font-size: 120%;
}
</style>

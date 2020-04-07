<template>
  <div class="product__container">
    <v-card class="mx-auto" max-width="250">
      <v-img :src="product.img" height="200px"></v-img>

      <v-card-actions>
        <div class="btn__container">
          <v-btn class="btn" color="purple" text>{{ product.type }}</v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>{{ product.text }}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  props: {
    product: Object
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.items,
.btn {
  font-family: "Lato", "Arial", sans-serif;
}

.product__container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.item__title,
.btn__container {
  display: flex;
  justify-content: center;
}
</style>

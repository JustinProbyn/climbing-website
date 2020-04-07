<template>
  <div class="product__container">
    <v-card class="mx-auto" max-width="250">
      <v-img :src="product.img" height="200px"></v-img>
      <div class="btn__container">
        <v-card-actions>
          <v-btn class="btn" color="purple" text>
            <router-link :to="product.path">{{ product.type }}</router-link>
          </v-btn>
        </v-card-actions>
      </div>
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
  padding: 35px;
}

.item__title,
.btn__container {
  display: flex;
  justify-content: center;
}
</style>

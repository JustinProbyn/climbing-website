<template>
  <div class="product__container">
    <v-card class="mx-auto" max-width="250">
      <router-link :to="product.path">
        <v-img style="cursor:pointer" :src="product.img" height="250px"></v-img>
      </router-link>
      <div>
        <v-card-actions class="btn__container">
          <router-link class="btn__container" :to="product.path">
            <v-btn class="btn" text>{{ product.type }}</v-btn>
          </router-link>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  /**
   * This is the component used in Gear.vue (in views)
   * It loops through all the products available, displays it in Gear.vue, and links to their respective pages
   */
  data: () => ({
    show: false
  }),
  props: {
    // Receives the list of available products (with router data) as a prop from Gear.vue
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

.btn__container {
}
.btn :link,
.btn :visited {
  color: rgb(100, 100, 100);
}

.btn :hover,
.btn :active {
  color: #d35400;
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
  text-decoration: none;
}
</style>

<template>
  <div class="product__container">
    <v-card class="mx-auto" max-width="250">
      <router-link :to="product.path">
        <v-img style="cursor:pointer" :src="product.img" height="250px" :alt="product.type"></v-img>
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
  -webkit-box-sizing: border-box;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding: 35px;
}

.item__title,
.btn__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-decoration: none;
}
</style>

<template>
  <div class="articles">
    <div class="article__box">
      <img class="news__img" :src="data.img" />
      <v-card class="article__info" height="100%">
        <v-card-title class="title">
          <a target="_blank" style="text-decoration: none" :href="data.link">{{ data.heading }}</a>
        </v-card-title>
        <v-card-subtitle class="sub">{{ data.sub }}</v-card-subtitle>
        <v-card-text class="text">{{ data.text }}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style scoped>
/* ARTICLES */

.article__box {
  display: flex;
  box-shadow: 1px 1px 1px rgb(255, 255, 255);
  height: 200px;
  width: auto;
  margin-right: 20px;
}

.article__info {
  width: 100%;
}

.news__img {
  width: auto;
  height: 100%;
}

.sub {
  font-size: 105%;
  font-weight: 400;
}

.title a:link,
.title a:visited {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  font-size: 100%;
  margin-right: 40px;
  text-decoration: none;
  color: rgb(54, 54, 54);
  transition: color 0.3s;
  word-spacing: 2px;
  list-style: none;
}
</style>

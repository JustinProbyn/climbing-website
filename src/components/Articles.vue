<template>
  <v-app class="articles__wrapper">
    <div class="articles">
      <v-dialog width="900px" style="overflow: hidden">
        <template v-slot:activator="{ on }">
          <div v-on="on" class="article__box">
            <div id="text" class="text">
              {{
              data.title
              }}
            </div>
            <img id="img" class="news__img" :src="data.url" />
          </div>
        </template>
        <v-card>
          <v-card-title class="news__modal--title">
            <span class="headline">
              {{
              data.title
              }}
            </span>
          </v-card-title>
          <v-card-text class="news__modal--text" style="white-space: pre-line; color=#000">
            {{
            data.textBody
            }}
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>



<script>
export default {
  props: {
    data: Object
  },
  methods: {
    show() {
      this.$modal.show(this.data.title);
    },
    hide() {
      this.$modal.hide(this.data.title);
    }
  }
};
</script>

<style scoped>
/* ARTICLES */

* {
  word-break: break-word;
  font-family: "Lato", "Arial", sans-serif;
}

.articles__wrapper {
  height: 420px;
  border-radius: 6px;
}
.articles {
  border-radius: 6px;
}

.article__box {
  display: flex;
  height: 420px;
  width: 300px;
  background-color: rgb(0, 0, 0);
  z-index: 1;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  border: 0.5px solid black;
}

#text {
  display: flex;
  z-index: 1;
  position: absolute;
  padding: 10px;
  letter-spacing: 1px;
  align-self: flex-end;
  font-size: 120%;
  color: #ffffff;
  text-shadow: 2px 2px #313131;
  cursor: pointer;
}

#img {
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: 0.7;
  transform: scale(1.15);
  transition: transform 0.5s, opacity 0.5s;
}
#text:hover + #img {
  opacity: 1;
  transform: scale(1.03);
  cursor: pointer;
}

#img:hover {
  opacity: 1;
  transform: scale(1.03);
  cursor: pointer;
}

.sub {
  font-size: 105%;
  font-weight: 400;
}

.title a:link,
.title a:visited {
  font-weight: 300;
  font-size: 100%;
  text-decoration: none;
  color: rgb(54, 54, 54);
  transition: color 0.3s;
  word-spacing: 2px;
  list-style: none;
}

.news__modal--text {
  font-size: 110%;
}

.news__modal--title {
  font-size: 120%;
}
</style>

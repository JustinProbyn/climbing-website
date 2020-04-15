<template>
  <div class="articles">
    <div class="article__box">
      <img class="news__img" :src="data.url" />
      <v-card class="article__info" height="100%">
        <v-card-title class="title">
          <a @click="show" style="text-decoration: none">
            {{
            data.title
            }}
          </a>

          <modal
            style=" z-index: 9999;"
            :scrollable="true"
            width="1140px"
            height="auto"
            :name="data.title"
          >
            <div class="myModal">
              <div class="modal__title">
                {{
                data.title
                }}
              </div>
              <br />
              <div style="white-space: pre-line;" class="modal__text">
                {{
                data.textBody
                }}
              </div>
            </div>
          </modal>
        </v-card-title>
        <v-card-subtitle class="sub">{{ data.subTitle }}</v-card-subtitle>
        <v-card-text class="text">By {{ data.author }} - {{ data.date }}</v-card-text>
      </v-card>
    </div>
  </div>
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
}

.article__box {
  display: flex;
  box-shadow: 1px 1px 1px rgb(255, 255, 255);
  height: 210px;
  width: 100%;
  
}

.article__info {
  width: 100%;
}

.news__img {
  width: 210px;
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
  text-decoration: none;
  color: rgb(54, 54, 54);
  transition: color 0.3s;
  word-spacing: 2px;
  list-style: none;
}

.myModal {
  display: flex;
  padding: 35px;
  text-align: left;
  flex-direction: column;
}

.modal__title {
  font-size: 130%;
  align-self: center;
}

.modal {
}
</style>

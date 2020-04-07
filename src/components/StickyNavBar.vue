<template>
  <div class="nav-bar__container">
    <nav class="nav__bar">
      <ul class="nav__bar--ul">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'News' }">News</router-link>
        </li>
        <li>
          <router-link to="Pictures">Pictures</router-link>
        </li>
        <li>
          <router-link to="Training">Training</router-link>
        </li>
        <li>
          <router-link to="ClimbingSpots">Climbing spots</router-link>
        </li>
        <li>
          <router-link to="Gear">Gear</router-link>
        </li>
        <li>
          <router-link to="CompScene">Comp Scene</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a.router-link-active {
  font-weight: 700;
}

.nav__bar {
  list-style: none;
}
.nav__bar--ul {
  position: fixed;
  background-color: rgba(39, 41, 41, 0.897);
  display: flex;
  justify-content: center;
  list-style: none;
  color: rgb(218, 214, 214);
  display: flex;
  width: 100vw;
  list-style: none;
  z-index: 9999;
  margin-top: -250px;
}

.nav__bar--ul li a:link,
.nav__bar--ul li a:visited {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 150%;
  padding-right: 40px;
  text-decoration: none;
  color: rgb(247, 240, 240);
  transition: color 0.3s;
  word-spacing: 2px;
  list-style: none;
}

.nav__bar--ul li a:hover,
.nav__bar--ul li a:active {
  color: #d35400;
}

/* Sticky navi */
</style>

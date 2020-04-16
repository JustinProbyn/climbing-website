<template>
  <footer>
    <div class="footer__container">
      <ul class="icons">
        <li>
          <a href="#">
            <v-icon class="icons--icon--twitter" size="30">mdi-twitter</v-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <v-icon class="icons--icon--facebook" size="30">mdi-facebook</v-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <v-icon class="icons--icon--google-plus" size="30">mdi-google-plus</v-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <v-icon class="icons--icon--linkedin" size="30">mdi-linkedin</v-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <v-icon class="icons--icon--instagram" size="30">mdi-instagram</v-icon>
          </a>
        </li>
      </ul>

      <div class="text">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum.
        </p>
      </div>
      <div class="date">
        {{ new Date().getFullYear() }} —
        <strong>&copy; &nbsp; Climbing Website</strong>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 0.5px solid rgba(0, 0, 0, 0.856);
  background-color: rgb(255, 255, 255);
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
  width: 100vw;
}

.footer__container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 30px;
}

/* ICONS */

.icons {
  display: inline-flex;
  list-style: none;
  padding: 5px;
}

.icons li a:link,
.icons li a:visited {
  padding-bottom: 1px;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
  text-decoration: none;
  margin-left: 15px;
}

.icons--icon--facebook:hover {
  text-decoration: none;
  color: #3b5998;
}
.icons--icon--twitter:hover {
  text-decoration: none;
  color: #00aced;
}
.icons--icon--google-plus:hover {
  text-decoration: none;
  color: #dd4b39;
}
.icons--icon--linkedin:hover {
  text-decoration: none;
  color: #2867b2;
}
.icons--icon--instagram:hover {
  text-decoration: none;
  color: #517fa4;
}

/* TEXT */

.text {
  color: rgb(87, 86, 86);
}

.date {
  color: #d35400;
}
</style>

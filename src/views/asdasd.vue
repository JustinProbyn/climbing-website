       <template>
  <div class="menu">
    <v-icon
      @click="openMenu"
      class="menu__icon"
      style="color: #d35400; font-size: 200%; cursor: pointer; margin-left: 5px"
    >mdi-menu</v-icon>
    <div class="menu__popout">
      <div
        :class="[
                  showMenu
                    ? 'animated slideInLeft faster'
                    : 'animated slideOutLeft faster'
                ]"
      >
        <div class="btns">
          <v-dialog v-model="dialog" max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn outlined color="#d35400" v-on="on" class="btn">Disclaimer</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">Disclaimer</v-card-title>
              <v-card-text style="width: 280px">
                The content on this mock website is not original. It has
                been sourced from other websites that include
                climbing.co.za, climbing.com, frictionlabs.com and
                articlegenerator.org.
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-dialog max-width="500">
            <template v-slot:activator="{ on }">
              <v-btn outlined color="#d35400" v-on="on" class="btn" v-if="!auth">Sign Up</v-btn>
            </template>
            <v-card max-height="550">
              <signup></signup>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog" max-width="400">
            <template v-slot:activator="{ on }">
              <v-btn outlined color="#d35400" class="btn" v-if="!auth" v-on="on">Sign In</v-btn>
            </template>
            <v-card height="370">
              <signin></signin>
            </v-card>
          </v-dialog>

          <v-btn outlined color="#d35400" class="btn" v-if="auth" to="add-article">Add Article</v-btn>
          <v-btn outlined color="#d35400" class="btn" v-if="auth" to="add-picture">Add Picture</v-btn>
          <v-btn outlined color="#d35400" class="btn" v-if="auth" @click="signOut">Sign Out</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
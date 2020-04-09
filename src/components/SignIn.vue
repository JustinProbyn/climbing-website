<template>
  <v-app @keyup.enter.native="submit">
    <v-card style="padding: 15px" width="500px" class="mx-auto mt-10">
      <v-card-title>
        <h2 class="display-1">Sign In</h2>
      </v-card-title>
      <v-text-field
        outlined
        prepend-inner-icon="mdi-email"
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        outlined
        prepend-inner-icon="mdi-lock"
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        type="password"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <div class="btns">
        <v-btn color="success" :disabled="$v.$invalid" class="mr-4" @click="submit">submit</v-btn>
        <v-btn color="info" @click="goToSignUp">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="goToHome">Home</v-btn>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import firebase from "firebase";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required },
    email: { required, email }
  },

  data: () => ({
    password: "",
    email: ""
  }),

  computed: {
    //Errors that are thrown to user if validations aren't met
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    /* checks if validation errors then signs into firebase */
    submit() {
      this.$v.$touch();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(error);
        });
      const userData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("SIGNIN_setState", userData);

      //   adds localstorage for autologin feature
      localStorage.setItem("email", userData.email);
      localStorage.setItem("password", userData.password);

      // clears form
      this.password = "";
      this.email = "";

      // moves page to home
      this.$router.push("/");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToSignUp() {
      this.$router.push("signup");
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
}
.btns {
  display: flex;
  margin-top: 20px;
}
</style>

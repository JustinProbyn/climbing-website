<template>
  <v-app class="form" @keyup.enter.native="submit">
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
        <!-- <v-btn color="info" @click="goToSignUp">Register</v-btn> -->
      </div>
    </v-card>
  </v-app>
</template>

<script>
/**
 * A sign up component that is displayed on the website as a modal
 * It is accesible from the Home.vue page dropdown menu
 * A choice to sign in or sign up is displayed
 * when a user tries to access the checkout page without signing in
 */
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

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
      !this.$v.email.required && errors.push("Email is required");
      return errors;
    }
  },

  methods: {
    /* checks if validation errors then signs into firebase */
    submit() {
      this.$emit("signedIn");
      this.$v.$touch();
      const userData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("firestoreSignIn", userData);
      this.$forceUpdate;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
}
.form {
  margin-top: -50px;
}
</style>

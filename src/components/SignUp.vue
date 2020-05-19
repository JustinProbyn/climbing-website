<template>
  <v-app class="form" @keyup.enter.native="submit">
    <v-card style="padding: 15px" width="500px" class="form mx-auto mt-10">
      <v-card-title>
        <h2 class="display-1">Sign Up</h2>
      </v-card-title>
      <div class="inputs">
        <v-text-field
          outlined
          prepend-inner-icon="mdi-account-circle"
          v-model="username"
          :error-messages="nameErrors"
          :counter="15"
          label="Userame"
          required
          @input="$v.username.$touch()"
          @blur="$v.username.$touch()"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-email"
          v-model="email"
          :error-messages="emailErrors"
          label="Email"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          outlined
          class="password_block"
          prepend-inner-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-model="password"
          :error-messages="passwordErrors"
          label="Password"
          required
          :type="showPassword ? 'text' : 'password'"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-text-field
          outlined
          class="password_block"
          prepend-inner-icon="mdi-lock"
          v-model="confirmPassword"
          :error-messages="confirmPasswordErrors"
          label="Confirm Password"
          required
          type="password"
          @input="$v.confirmPassword.$touch()"
          @blur="$v.confirmPassword.$touch()"
        ></v-text-field>
        <div class="btns">
          <v-btn color="success" :disabled="$v.$invalid" class="mr-4" @click="submit">Submit</v-btn>

        </div>
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
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

export default {
  // Form Validations
  mixins: [validationMixin],
  validations: {
    username: { required, maxLength: maxLength(15) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { sameAs: sameAs("password") }
  },
  /***************************************/

  data() {
    return {
      showPassword: false,
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    // Errors thrown at user if validations aren't met
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      !this.$v.password.minLength &&
        errors.push("Password must be at least six characters");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.maxLength &&
        errors.push("Username must be at most 15 characters long");
      !this.$v.username.required && errors.push("Username is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid email");
      !this.$v.email.required && errors.push("Email is required");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      this.$v.confirmPassword.$error && errors.push("Passwords must match.");
      return errors;
    }
  },
  /***************************************/
  methods: {
    //checks if there are any errors in form and creates user with firebase
    submit() {
      this.$emit("signedUp");
      this.$v.$touch();
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("firestoreSignUp", userData);
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
  margin-top: 15px;
}

.form {
  margin-top: -60px;
}
</style>

<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-text-field v-model="password" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-btn color="success" class="mr-4" @click="signUp">SignUp</v-btn>
  </v-form>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(error);
          // ...
        });
    }
  }
};
</script>

<template>
  <v-app>
    <v-card class="payment-form">
      <h1 class="checkout__heading">Payment</h1>

      <div class="card-element">
        <input v-model="cardHolderName" placeholder="Card holder" type="text" id="card-holder-name" />
      </div>

      <div class="card-element">
        <div
          placeholder="Stripe test card number is 4242 4242 4242 4242"
          id="card-number-element"
          class="input-value"
        ></div>
      </div>

      <div class="card-element--smaller">
        <div style="width: 40%" id="card-expiry-element"></div>
        <div style="width: 40%" id="card-cvc-element"></div>
      </div>

      <div class="card-element">
        <input v-model="address" placeholder="Address" type="text" id="address-element" />
      </div>

      <div class="card-element">
        <input v-model="address_zip" placeholder="Zip" type="text" id="address-zip-element" />
      </div>

      <div class="checkout__btn__container">
        <button
          class="checkout__btn"
          @click="newPayment"
        >Pay R{{finalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</button>
      </div>
      <v-overlay :value="overlay">
        <p v-if="overlayText" class="overlay__text">Payment successful! Thank you</p>
        <v-progress-circular v-if="overlayLoading" indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-card>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  props: {
    finalAmount: Number
  },
  data() {
    return {
      // overlay
      overlay: false,
      overlayLoading: false,
      overlayText: false,
      //
      stripe: null,
      cardNumber: null,
      cardExp: null,
      cardCvc: null,
      currentUser: null,
      amount: 0,
      address: "",
      address_zip: "",
      cardHolderName: ""
    };
  },
  computed: {
    getCartData() {
      return this.$store.getters.getCartData;
    }
  },
  methods: {
    test() {
      this.currentUser = firebase.auth().currentUser;
      const p = firebase
        .firestore()
        .collection("stripe_customers")
        .doc(this.currentUser.uid)
        .collection("paymentsToken")
        .get();

      console.log(p.data());
    },
    newPayment() {
      this.overlay = true;
      this.overlayLoading = true;
      this.stripe.createToken(this.cardNumber).then(result => {
        if (result.error) {
          console.log(result.error);
        } else {
          const payment = {
            productsBought: this.getCartData,
            amount: this.amount,
            source: result.token,
            address: this.address,
            address_zip: this.address_zip,
            name: this.cardHolderName
          };

          this.currentUser = firebase.auth().currentUser;
          const paymentsRef = firebase
            .firestore()
            .collection("stripe_customers")
            .doc(this.currentUser.uid)
            .collection("paymentsToken");

          paymentsRef.add({ payment }).then(docRef => {
            paymentsRef.onSnapshot(querySnapshot => {
              querySnapshot.forEach(doc => {
                if (doc.id == docRef.id) {
                  if ((doc.id, " => ", doc.data().error)) {
                    alert(doc.id, " => ", doc.data().error);
                    paymentsRef.doc(doc.id).delete();
                    return;
                  } else if (
                    (doc.id, " => ", doc.data().status == "succeeded")
                  ) {
                    this.overlay = true;
                    this.overlayLoading = false;
                    this.overlayText = true;
                    setTimeout(() => {
                      this.overlay = false;
                    }, 2000);
                  }
                }
              });
            });
          });
        }
      });
    }
  },
  mounted() {
    this.amount = this.finalAmount;
    this.stripe = window.Stripe("pk_test_7CQkqRuEAKn6EjSN8wqGTBrs00lImK11Vj");
    var elements = this.stripe.elements();

    this.cardNumber = elements.create("cardNumber");
    this.cardNumber.mount("#card-number-element");

    this.cardExp = elements.create("cardExpiry");
    this.cardExp.mount("#card-expiry-element");

    this.cardCvc = elements.create("cardCvc");
    this.cardCvc.mount("#card-cvc-element");
  }
};
</script>

<style>
/* form */

* {
  font-family: "Lato", "Arial", sans-serif;
}

.checkout__heading {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  padding: 15px;
}
.payment-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ececec;
}
.payment-form h5 {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}
.card-element {
  margin-top: 5px;
}
#card-number-element,
#card-expiry-element,
#address-element,
#card-holder-name,
#address-zip-element,
#card-cvc-element {
  background: white;
  padding: 5px;
  box-shadow: 2px 2px 2px rgb(187, 186, 186);
  border-radius: 5px;
  height: 40px;
}

#card-cvc-element input {
}

.place-order-button-block {
  margin: 10px 0;
}

/* form layout */

.card-element--smaller {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

/* Buttons */
.checkout__btn__container :hover,
.checkout__btn__container :active {
  background-color: #d35400;
  color: #fff;
}

.payment-form .checkout__btn__container {
  width: 100%;
}

.checkout__btn :hover {
  color: #fff;
}

.checkout__btn {
  width: 100%;
  border: 1px solid #d35400;
  color: #d35400;
  text-transform: uppercase;
  padding: 5px;
  font-size: 90%;
  font-weight: 400;
  transition: color 0.3s;
  transition: background-color 0.3s;
  width: 100%;
}

.v-btn__content {
  width: 100%;
}

.checkout__btn__container {
  display: flex;
  width: 25%;
  margin-top: 8px;
}

/* Overlay */

.overlay__text {
  font-size: 200%;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
}
</style>

<template>
  <section class="row payment-form">
    <h1 class="#e0e0e0 grey lighten-4">
      Payment Method
    </h1>

    <div class="error red center-align white-text"></div>

    <div class="col s12 card-element">
      <label>Card Number</label>
      <div id="card-number-element" ref="cardnumber"></div>
    </div>

    <div class="col s6 card-element">
      <label>Expiry Date</label>
      <div id="card-expiry-element" ref="cardexpiry"></div>
    </div>

    <div class="col s6 card-element">
      <label>CVC</label>
      <div id="card-cvc-element" ref="cardcvc"></div>
    </div>

    <div class="btn__container">
      <button class="ma-2 btn" outlined color="#d35400" @click="newPayment">
        Make payment
      </button>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
export default {
  props: {
    finalAmount: Number
  },
  data() {
    return {
      currentUser: null,
      spk: "pk_test_7CQkqRuEAKn6EjSN8wqGTBrs00lImK11Vj",
      stripe: undefined,
      cardCvc: undefined,
      cardExp: undefined,
      cardNumber: undefined,
      amount: 0
    };
  },
  methods: {
    newPayment() {
      //   Get Stripe token
      this.stripe.createToken(this.cardExp).then(result => {
        if (result.error) {
          this.stripeValidationError = result.error.message;
        } else {
          this.currentUser = firebase.auth().currentUser;
          firebase
            .firestore()
            .collection("stripe_customers")
            .doc(this.currentUser.uid)
            .collection("charges")
            .add({ amount: this.finalAmount, source: result.token });
        }
      });
      //   Saving 'payment' to firestore triggers function to send a payment to stripe
    }
  },
  mounted() {
    this.stripe = window.Stripe(this.spk);
    this.cardCvc = this.stripe.elements().create("cardCvc");
    this.cardExp = this.stripe.elements().create("cardExpiry");
    this.cardNumber = this.stripe.elements().create("cardNumber");
    this.cardExp.mount(this.$refs.cardexpiry);
    this.cardCvc.mount(this.$refs.cardcvc);
    this.cardNumber.mount(this.$refs.cardnumber);
  }
};
</script>

<style>
.payment-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 20px;
  border: 1px solid #ececec;
}
.payment-form h1 {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}
.card-element {
  margin-top: 5px;
}
.card-number,
#card-expiry,
#card-cvc {
  background: white;
  padding: 5px;
  border: 1px solid #ececec;
}
.place-order-button-block {
  margin: 10px 0;
}
/* Buttons */
.btn__container :hover,
.btn__container :active {
  background-color: #d35400;
  color: #fff;
}

.btn :hover {
  color: #fff;
}

.btn {
  width: 100%;
  border: 1px solid #d35400;
  color: #d35400;
  text-transform: uppercase;
  padding: 5px;
  font-size: 90%;
  font-weight: 400;
  transition: color 0.3s;
  transition: background-color 0.3s;
}

.v-btn__content {
  width: 100%;
}

.btn__container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 8px;
}
</style>

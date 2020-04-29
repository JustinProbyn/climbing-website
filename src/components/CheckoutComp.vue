<template>
  <section class="payment-form">
    <h5 class="#e0e0e0 grey lighten-4">
      Payment Method
      <span class="right">$25</span>
    </h5>

    <div class="error red center-align white-text"></div>

    <div class="col s12 card-element">
      <label>Card Number</label>
      <div id="card-number-element" class="input-value"></div>
    </div>

    <div class="col s6 card-element">
      <label>Expiry Date</label>
      <div id="card-expiry-element"></div>
    </div>

    <div class="col s6 card-element">
      <label>CVC</label>
      <div id="card-cvc-element"></div>
    </div>

    <div class="col s12 place-order-button-block">
      <button class="btn col s12 #e91e63 pink" @click="newPayment">
        Place Order
      </button>
      <v-btn @click="test">TEST</v-btn>
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
      stripe: null,
      cardNumber: null,
      cardExp: null,
      cardCvc: null,
      currentUser: null,
      amount: 0,
      card: {
        name: "",
        number: "4242424242424242",
        exp_month: null,
        exp_year: null,
        cvc: "",
        address_zip: ""
      }
    };
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
      this.stripe.createToken(this.cardNumber).then(result => {
        if (result.error) {
          console.log(result.error);
        } else {
          const payment = {
            amount: this.amount,
            source: result.token
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
                    alert(doc.data().status);
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

<style scoped>
/* form */

.payment-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px auto;
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
#card-cvc-element {
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
  width: 25%;
  margin-top: 8px;
}
</style>

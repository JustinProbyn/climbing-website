<template>
  <v-card class="payment-form">
    <div class="checkoutcomp__header">
      <h1 class="checkout__heading">Payment</h1>
      <v-tooltip top>
        <template class="card__tooltip" v-slot:activator="{ on }">
          <v-icon v-on="on" color="grey lighten-1">mdi-information</v-icon>
        </template>
        <span>Use card number 4242 4242 4242 4242 for Stripe testing</span>
      </v-tooltip>
    </div>
    <h2 class="payment-type--text">Please select a payment method:</h2>
    <div class="payment-type">
      <div
        @click="
          (eftSelectedClass = !eftSelectedClass),
            (cardSelectedClass = !cardSelectedClass),
            (cardSelected = true),
            (eftSelected = false)
        "
        class="card-select"
      >
        <div :class="{ selected: cardSelectedClass }">
          <img src="../../public/img/debitcard.jpg" alt="Debit card example" />
        </div>
      </div>
      <div
        @click="
          (eftSelectedClass = !eftSelectedClass),
            (cardSelectedClass = !cardSelectedClass),
            (cardSelected = false),
            (eftSelected = true)
        "
        class="eft-select"
      >
        <div :class="{ selected: eftSelectedClass }">EFT</div>
      </div>
    </div>
    <div v-show="cardSelected" class="card-selected">
      <div class="card-element">
        <input
          v-model="cardHolderName"
          placeholder="Card holder"
          type="text"
          id="card-holder-name"
        />
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

      <div class="checkout__btn__container">
        <button class="checkout__btn" @click="newPayment">
          Pay R{{
            this.totalCostVATDelivery
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }}
        </button>
      </div>
    </div>
    <div v-show="eftSelected" class="eft-selected">
      <p style="font-size: 90%">
        Please transfer the the amount of
        <span style="color:#d35400;"
          >R{{
            this.totalCostVATDelivery
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }}</span
        >
        to the follow bank details within two days.
      </p>
      <div style="font-size: 90%" class="account-details">
        <p><strong>Account holder:</strong> Climbing Website</p>
        <p><strong>Account number:</strong> 12345678910</p>
        <p><strong>Branch code:</strong> 250655</p>
        <p><strong>Bank name:</strong> FNB</p>
      </div>
      <p style="font-size: 90%">
        Once the order is placed you will receive an order confirmation via
        email. Please use the order number as reference for the payment. Please
        email proof of payment to email@email.com.
      </p>
      <div class="checkout__btn__container">
        <button class="placeorder__btn">Place order</button>
      </div>
    </div>
    <v-overlay :value="overlay">
      <p v-if="overlayText" class="overlay__text">
        Payment successful! Thank you
      </p>
      <v-progress-circular
        v-if="overlayLoading"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-card>
</template>

<script>
/**
 * The component used in the Checkout.vue Page (in views).
 * This is the only component/view in the website that has code relating to Firestore in its <script> code (everything else is stored in firestore.js).
 * This was done to avoid unecessarily lengthy code to implement its functionality.
 * This page loads pre-built elements from Stripe so that a user can make a secure payment
 * To test a card payment, use card number 4242 4242 4242 4242, any CVC number, and any future date.
 */
import firebase from "firebase";
export default {
  props: {
    finalAmount: Number,
    deliveryCost: Number,
    deliveryAddress: Object
  },
  data() {
    return {
      // disable pay button
      disabled: false,
      // payment type
      cardSelected: true,
      cardSelectedClass: true,
      eftSelected: false,
      eftSelectedClass: false,
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
      cardHolderName: ""
    };
  },
  computed: {
    totalCostVAT() {
      return this.finalAmount + this.finalAmount * 0.15;
    },
    totalCostVATDelivery() {
      return this.totalCostVAT + this.deliveryCost;
    },
    getCartData() {
      return this.$store.getters.getCartData;
    },
    getOrderData() {
      return this.$store.getters.getOrderData;
    }
  },
  methods: {
    newPayment() {
      if (
        this.deliveryAddress.city == "" ||
        this.deliveryAddress.province == "" ||
        this.deliveryAddress.suburb == "" ||
        this.deliveryAddress.streetNameNumber == ""
      ) {
        alert("Please enter a full delivery address");
        return;
      } else {
        this.stripe.createToken(this.cardNumber).then(result => {
          if (result.error) {
            alert(result.error.message);
            return;
          } else {
            this.overlay = true;
            this.overlayLoading = true;
            const payment = {
              productsBought: this.getCartData,
              amount: this.amount,
              source: result.token,
              name: this.cardHolderName,
              deliveryAddress: this.deliveryAddress
            };
            this.currentUser = firebase.auth().currentUser;
            const paymentsRef = firebase
              .firestore()
              .collection("stripe_customers")
              .doc(this.currentUser.uid)
              .collection("paymentsToken");
            // When payment is stored on Firestore, it triggers a Firestore Function to create a charge with Stripe
            paymentsRef.add({ payment }).then(docRef => {
              paymentsRef.onSnapshot(querySnapshot => {
                querySnapshot.forEach(doc => {
                  if (doc.id == docRef.id) {
                    if ((doc.id, " => ", doc.data().error)) {
                      alert(doc.id, " => ", doc.data().error);
                      paymentsRef.doc(doc.id).delete();
                      return;
                    } else if (
                      //if payment was sucessful, a field ('status: succeeded') under the payment doc on Firestore is stored
                      (doc.id, " => ", doc.data().status == "succeeded")
                    ) {
                      this.overlay = true;
                      this.overlayLoading = false;
                      this.overlayText = true;
                      setTimeout(() => {
                        this.overlay = false;
                        this.$router.push("user-account");
                        this.$store.dispatch("clearCart");
                      }, 2000);
                    }
                  }
                });
              });
            });
          }
        });
      }
    }
  },
  mounted() {
    // Loads the payment form elements from Stripe when the page is loaded
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
/* choose payment type */

.payment-type--text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-bottom: 10px;
}
.payment-type {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  height: 130px;
  width: 100%;
  border-radius: 3px;
  padding: 20px;
}

.eft-select,
.card-select {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 30%;
  height: 95%;

  border-radius: 3px;
  cursor: pointer;
}

.selected {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: 2px solid #d35400;
  height: 100%;
  width: 100%;
  border-radius: 3px;
}

/* form layout */

.card-element--smaller {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.checkoutcomp__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.checkout__heading {
  text-transform: uppercase;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-right: 10px;
}
.payment-form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
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
#card-holder-name,
#card-cvc-element {
  background: white;
  padding: 5px;
  -webkit-box-shadow: 2px 2px 2px rgb(187, 186, 186);
          box-shadow: 2px 2px 2px rgb(187, 186, 186);
  border-radius: 5px;
  height: 40px;
  margin-top: 30px;
}

#card-holder-name {
  width: 100%;
  margin-top: 10px;
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

.checkout__btn,
.placeorder__btn {
  width: 100%;
  border: 1px solid #d35400;
  color: #d35400;
  text-transform: uppercase;
  padding: 5px;
  font-size: 90%;
  font-weight: 400;
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 10px;
  border-radius: 3px;
}

.checkout__btn {
  margin-top: 30px;
}

.v-btn__content {
  width: 100%;
}

.checkout__btn__container {
  display: -webkit-box;
  display: -ms-flexbox;
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

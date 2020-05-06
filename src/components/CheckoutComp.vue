<template>
  <v-card class="payment-form">
    <h1 class="checkout__heading">Payment</h1>
    <h2 class="payment-type--text">Please select a payment method:</h2>
    <div class="payment-type">
      <div
        @click="eftSelectedClass = !eftSelectedClass, cardSelectedClass = !cardSelectedClass, cardSelected = true, eftSelected = false"
        class="card-select"
      >
        <div :class="{'selected': cardSelectedClass}">
          <img src="../../public/img/debitcard.jpg" alt="Debit card example" />
        </div>
      </div>
      <div
        @click="eftSelectedClass = !eftSelectedClass, cardSelectedClass = !cardSelectedClass, cardSelected = false, eftSelected = true"
        class="eft-select"
      >
        <div :class="{'selected': eftSelectedClass}">EFT</div>
      </div>
    </div>
    <div v-show="cardSelected" class="card-selected">
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

      <div class="checkout__btn__container">
        <button
          class="checkout__btn"
          @click="newPayment"
        >Pay R{{this.totalCostVATDelivery.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</button>
      </div>
    </div>
    <div v-show="eftSelected" class="eft-selected">
      <p style="font-size: 90%">
        Please transfer the the amount of
        <span
          style="color:#d35400;"
        >R{{this.totalCostVATDelivery.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span> to the follow bank details within two days.
      </p>
      <div style="font-size: 90%" class="account-details">
        <p>
          <strong>Account holder:</strong> Climbing Website
        </p>
        <p>
          <strong>Account number:</strong> 12345678910
        </p>
        <p>
          <strong>Branch code:</strong> 250655
        </p>
        <p>
          <strong>Bank name:</strong> FNB
        </p>
      </div>
      <p style="font-size: 90%">
        Once the order is placed you will receive an order confirmation via email. Please use the order number as reference for the payment.
        Please email proof of payment to email@email.com.
      </p>
      <div class="checkout__btn__container">
        <button class="placeorder__btn">Place order</button>
      </div>
    </div>
    <v-overlay :value="overlay">
      <p v-if="overlayText" class="overlay__text">Payment successful! Thank you</p>
      <v-progress-circular v-if="overlayLoading" indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-card>
</template>

<script>
import firebase from "firebase";
export default {
  props: {
    finalAmount: Number,
    deliveryCost: Number
  },
  data() {
    return {
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
/* choose paymenty type */

.payment-type--text {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.payment-type {
  display: flex;
  justify-content: space-around;
  height: 130px;
  width: 100%;
  border-radius: 3px;
  padding: 20px;
}

.eft-select,
.card-select {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 95%;

  border-radius: 3px;
  cursor: pointer;
}

.selected {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d35400;
  height: 100%;
  width: 100%;
  border-radius: 3px;
}

/*  */

.checkout__heading {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.payment-form {
  display: flex;
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
  box-shadow: 2px 2px 2px rgb(187, 186, 186);
  border-radius: 5px;
  height: 40px;
  margin-top: 30px;
}

#card-holder-name {
  width: 100%;
  margin-top: 10px;
}

/* form layout */

.card-element--smaller {
  display: flex;
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

.checkout__btn,
.placeorder__btn {
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

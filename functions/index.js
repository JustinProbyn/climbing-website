const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const stripe = require("stripe")(functions.config().stripe.token);
const currency = functions.config().stripe.currency || "ZAR";

// Charge customer on Stripe when a charge is saved to Firestore
exports.createStripeCharge = functions.firestore
  .document("stripe_customers/{userId}/charges/{id}")
  .onCreate(async (snap, context) => {});

// User created on Firestore --> register them with Stripe
exports.createStripeCustomer = functions.auth.user().onCreate(async user => {
  const customer = await stripe.customers.create({ email: user.email });
  return admin
    .firestore()
    .collection("stripe_customers")
    .doc(user.uid)
    .set({ customer_id: customer.id });
});

// If user deleted from Firestore --> also deleted from Stripe
exports.cleanupUser = functions.auth.user().onDelete(async user => {
  const snapshot = await admin
    .firestore()
    .collection("stripe_customers")
    .doc(user.uid)
    .get();
  const customer = snapshot.data();
  await stripe.customers.del(customer.customer_id);
  return admin
    .firestore()
    .collection("stripe_customers")
    .doc(user.uid)
    .delete();
});

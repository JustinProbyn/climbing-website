/**
 * Firestore Functions to activate when a user
 * interacts with certain aspects of Firestore
 * through the website. For example, making a payment.
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const stripe = require("stripe")(functions.config().stripe.token);
// Token has been saved as function config

// Charge customer on Stripe when a paymentToken is saved to Firestore
exports.createStripeCharge = functions.firestore
  .document("stripe_customers/{userId}/paymentsToken/{id}")
  .onCreate(async (snap, context) => {
    try {
      const charge = {
        amount: snap.data().payment.amount * 100,
        source: snap.data().payment.source.id,
        currency: "zar",
      };
      const idempotencyKey = context.params.pushId;
      const response = await stripe.charges.create(charge, {
        idempotency_key: idempotencyKey,
      });

      await snap.ref.set(response, {
        merge: true,
      });
    } catch (error) {
      await snap.ref.set(
        {
          error: userFacingMessage(error),
        },
        {
          merge: true,
        }
      );
    }
  });

function userFacingMessage(error) {
  return error.type ? error.message : "An error occurred";
}

import User from "../Models/user.js";
import { stripeApi } from "../Helpers/auth.js";
import webHookHandlers from "../Helpers/sub.js";

export const prices = async (req, res) => {
  const prices = await stripeApi.prices.list({
    expand: ["data.product"],
  });
  let ActivePrice = prices.data.filter((p) => p.active);
  res.json(ActivePrice.reverse());
};

export const configStripe = async (req, res) => {
  return res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

export const createSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      const session = await stripeApi.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: req.body.priceId,
            quantity: 1,
          },
        ],
        customer: user.stripe_customer_id,
        success_url: `${process.env.STRIPE_SUCCESS_URL}?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.STRIPE_CANCEL_URL}?canceled=true&session_id={CHECKOUT_SESSION_ID}`,
      });
      return res.status(200).json({ sessionId: session.id });
    }
    throw new Error("User Not found 401..");
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something WEnt Wrong..." });
  }
};

export const subscriptionStatus = async (req, res) => {
  try {
    const session = await stripeApi.checkout.sessions.retrieve(req.query.id, {
      expand: ["line_items"],
    });
    return res.status(200).json(session);
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
    console.log(error);
  }
};

export const subscriptions = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user && user.subscriptionsId) {
      const subscriptions = await stripeApi.subscriptions.retrieve(
        user.subscriptionsId,
        { expand: ["default_payment_method"] }
      );
      return res.json(subscriptions);
    }
    throw new Error("Unauthorized To Acesss this");
  } catch (err) {
    return res.status(401).json({ error: " Unauthorized To Acesss this " });
  }
};

export const customerPortal = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const portalSession = await stripeApi.billingPortal.sessions.create({
      customer: user.stripe_customer_id,
      return_url: `${process.env.CLIENT_URL}/dashboard`,
    });
    res.json(portalSession.url);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

export const webhook = async (req, res) => {
  let data, eventType;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripeApi.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (error) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.status(400).send(`Webhook error ${error.message}`);
    }
    data = event.data.object;
    eventType = event.type;
  }
  if (webHookHandlers[eventType]) {
    webHookHandlers[eventType](data);
  }
  res.sendStatus(200);
};

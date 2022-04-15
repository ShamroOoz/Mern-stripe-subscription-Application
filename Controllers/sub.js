import User from "../Models/user.js";
import { stripeApi } from "../Helpers/auth.js";
import webHookHandlers from "../Helpers/sub.js";

export const prices = async (req, res) => {
  const prices = await stripeApi.prices.list({
    expand: ["data.product"],
  });
  res.json(prices.data.reverse());
};

export const configStripe = async (req, res) => {
  return res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

export const createSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

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
      success_url: `http://localhost:3000/checkout/success?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/checkout/cancel?canceled=true&session_id={CHECKOUT_SESSION_ID}`,
    });
    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    res.status(400).json({ error: "Something WEnt Wrong..." });
    console.log(err);
  }
};

export const subscriptionStatus = async (req, res) => {
  try {
    const session = await stripeApi.checkout.sessions.retrieve(req.query.id, {
      expand: ["line_items"],
    });

    if (session.customer) {
      const customer = await stripeApi.customers.retrieve(session.customer);
    }
    return res.status(200).json(session);
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
    console.log(error);
  }
};

export const subscriptions = async (req, res) => {
  res.send("subscriptions");
};

export const customerPortal = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const portalSession = await stripeApi.billingPortal.sessions.create({
      customer: user.stripe_customer_id,
      return_url: "http://localhost:3000/dashboard",
    });
    console.log(portalSession);
    res.json(portalSession.url);
  } catch (err) {
    console.log(err);
  }
};

export const webhook = async (req, res) => {
  let data, eventType;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    let event;
    let signature = req.headers["stripe-signature"];
    console.log(process.env.STRIPE_WEBHOOK_SECRET);
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
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }
  if (webHookHandlers[eventType]) {
    webHookHandlers[eventType](data);
  }
  res.sendStatus(200);
};

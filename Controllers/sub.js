import User from "../Models/user.js";
import { stripeApi } from "../Helpers/auth.js";

export const prices = async (req, res) => {
  const prices = await stripeApi.prices.list();
  res.json(prices.data.reverse());
};

export const createSubscription = async (req, res) => {
  res.send("createSubscription");
};

export const subscriptionStatus = async (req, res) => {
  res.send("subscriptionStatus");
};

export const subscriptions = async (req, res) => {
  res.send("subscriptions");
};

export const customerPortal = async (req, res) => {
  res.send("customerPortal");
};

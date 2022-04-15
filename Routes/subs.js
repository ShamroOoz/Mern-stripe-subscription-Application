import express from "express";

const router = express.Router();

import {
  prices,
  createSubscription,
  subscriptionStatus,
  subscriptions,
  customerPortal,
  configStripe,
  webhook,
} from "../Controllers/sub.js";

import { requireSignin } from "../Middlewares/ReqAuth.js";

router.get("/prices", prices);
router.get("/config", configStripe);
router.post("/create-subscription", requireSignin, createSubscription);
router.get("/subscription-status", requireSignin, subscriptionStatus);
router.get("/subscriptions", requireSignin, subscriptions);
router.get("/customer-portal", requireSignin, customerPortal);

router.post("/webhook", webhook);

export default router;

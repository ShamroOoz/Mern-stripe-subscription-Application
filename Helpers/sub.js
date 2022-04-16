import User from "../Models/user.js";

const webHookHandlers = {
  "customer.subscription.created": async (subscription) => {
    try {
      const updated = await User.findOneAndUpdate(
        { stripe_customer_id: subscription.customer },
        {
          $set: { subscriptionsId: subscription.id },
        },
        { new: true }
      );
      console.log(updated);
    } catch (error) {
      console.log(error);
    }
  },
  // "customer.subscription.updated": async (subscription) => {
  //   console.log(`Subscription status is update 🔕 `, subscription);
  // },
  // TODO DEFINE THE ID TO UNDEFINE HAVE TO REMOVE IT FROM DB
  "customer.subscription.deleted": async (subscription) => {
    try {
      const updated = await User.findOneAndUpdate(
        { stripe_customer_id: subscription.customer },
        {
          $set: { subscriptionsId: undefined },
        },
        { new: true }
      );
      console.log(updated);
    } catch (error) {
      console.log(error);
    }
  },
};

export default webHookHandlers;

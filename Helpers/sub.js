const webHookHandlers = {
  "payment_intent.created": (data) => {
    console.log("💰 Payment intent created!", data);
  },
};

export default webHookHandlers;

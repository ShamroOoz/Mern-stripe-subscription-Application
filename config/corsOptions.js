export const allowedOrigins = [
  "https://mern-stripe-subscription-application.vercel.app",
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  "http://localhost:3500",
];

export const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

export const corsOptions = {
  origin: (origin, callback) => {
    // Todo after  devlopment we have to remove ==> !origin
    //also we have to remove the locahost from allowedOrigins array
    //add the main url where your client is live
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

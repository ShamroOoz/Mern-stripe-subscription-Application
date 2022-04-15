import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";
import morgan from "morgan";

const app = express();

// db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error ", err));

// middlewares
//app.use(express.json({ limit: "5mb" }));
app.use(
  express.json({
    verify: function (req, res, buf) {
      console.log(req.originalUrl);
      if (req.originalUrl.startsWith("/api/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);
app.use(morgan("tiny"));
app.use(
  cors({
    origin: true,
  })
);
//welcome route
app.get("/", (req, res) => {
  res.send("Wlecome to Home ✈ ");
});

// autoload routes
readdirSync("./Routes").map(async (r) =>
  app.use("/api", (await import(`./Routes/${r}`)).default)
);

// listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";
import morgan from "morgan";
import { credentials } from "./config/corsOptions.js";

const app = express();

// db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error ", err));

// middlewares

app.use(morgan("tiny"));

// Cross Origin Resource Sharing
app.use(credentials);

app.use(cors());

app.use(
  express.json({
    verify: function (req, res, buf) {
      if (req.originalUrl === "/api/webhook") {
        console.log(req.originalUrl);
        req.rawBody = buf.toString();
      }
    },
    limit: "5mb",
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

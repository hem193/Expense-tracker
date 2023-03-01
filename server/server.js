import express from "express";
import connect from "./database/mongodb.js";
import passport from "passport";
import cors from "cors";
import bodyParser from "body-parser";
import AuthApi from "./routes/AuthApi.js";
import TransactionsApi from "./routes/TransactionsApi.js";
import passportConfig from "./config/passport.js";

import * as dotenv from "dotenv";

dotenv.config();
const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);

app.get("/", (req, res) => {
  res.send("Hello Hemanth be Strong");
});

app.use("/transaction", TransactionsApi);
app.use("/auth", AuthApi);

await connect();

app.listen(PORT, () => {
  console.log(" Server is running at http://localhost:4000 ");
});

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Transaction from "./model/Transaction.js";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const username = process.env.MONGO_DB_USERNAME;
const passport = process.env.MONGO_DB_PASSWORD;
const url = process.env.MONGO_DB_URL;

await mongoose
  .connect(
    `mongodb+srv://${username}:${passport}@${url}/Expense-tracker?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB connection is successful"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello Hemanth be Strong");
});

app.post("/transaction", async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new Transaction({
    amount,
    description,
    date,
  });
  await transaction.save();
  res.json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log(" Server is running at http://localhost:4000 ");
});

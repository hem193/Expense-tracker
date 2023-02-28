import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const username = process.env.MONGO_DB_USERNAME;
const passport = process.env.MONGO_DB_PASSWORD;
const url = process.env.MONGO_DB_URL;

async function connect() {
  await mongoose
    .connect(
      `mongodb+srv://${username}:${passport}@${url}/Expense-tracker?retryWrites=true&w=majority`
    )
    .then(() => console.log("MongoDB connection is successful"))
    .catch((err) => console.error(err));
}

export default connect;

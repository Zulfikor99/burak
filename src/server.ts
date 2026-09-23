import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URI as string, {})
  .then((data) => {
    console.log("MongoDb connection succeed");
    const PORT = process.env.PORT;
  })
  .catch((err) => {
    console.log("Error on connection MongoDB", err);
  });

import mongoose from "mongoose";
import express from "express";

import { DB_HOST } from "./config.js";

const app = express();
mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })

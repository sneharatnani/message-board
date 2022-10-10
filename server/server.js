require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 3500;

// connect to mongoDB
connectDB();
app.use(cors());

// routes
app.use("/", require("./routes/messages.js"));

// catch all
app.all("*", (req, res) => {
  res.sendStatus(404);
});

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", require("./routes/messages.js"));

app.all("*", (req, res) => {
  res.sendStatus(404);
});

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});

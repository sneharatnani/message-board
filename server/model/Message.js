const mongoose = require("mongoose");

const { Schema } = mongoose;
const messageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);

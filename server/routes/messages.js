const express = require("express");
const {
  getAllMessages,
  createNewMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageController.js");

const router = express.Router();

router.route("/").get(getAllMessages).post(createNewMessage).put(updateMessage);

router.delete("/:id", deleteMessage);

module.exports = router;

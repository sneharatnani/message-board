const Message = require("../model/Message.js");

const getAllMessages = async (req, res) => {
  // const allMessages = await Message.find().sort({ updatedAt: -1 });
  const allMessages = await Message.find()
    .limit(req.query.limit)
    .skip(req.query.skip)
    .sort({ updatedAt: -1 });
  const numberOfDocs = await Message.countDocuments();
  res.json({ allMessages, numberOfDocs });
};

const createNewMessage = async (req, res) => {
  const { title, body, username } = req.body;

  try {
    const newMessage = { title, body, username };
    await Message.create(newMessage);
    res.status(201).json(newMessage);
  } catch {
    res.sendStatus(500);
  }
};

const updateMessage = async (req, res) => {
  const existingMessage = await Message.findById(req.body.id);

  if (req.body.title) existingMessage.title = req.body.title;

  if (req.body.body) existingMessage.body = req.body.body;

  if (req.body.username) existingMessage.username = req.body.username;

  const result = await existingMessage.save();
  res.json(result);
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id is required" });

  const idExist = await Message.findById(id);
  if (!idExist) {
    return res.status(400).json({ message: "No message found" });
  }
  const result = await Message.deleteOne({ _id: id });
  res.json(result);
};

module.exports = {
  getAllMessages,
  createNewMessage,
  updateMessage,
  deleteMessage,
};

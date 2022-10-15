const Message = require("../model/Message.js");

const getAllMessages = async (req, res) => {
  const allMessages = await Message.find().sort({ updatedAt: -1 });
  res.json(allMessages);
};

const createNewMessage = async (req, res) => {
  const { title, body, username } = req.body;

  try {
    await Message.create({ title, body, username });
    const allMessages = await Message.find().sort({ updatedAt: -1 });
    res.status(201).json(allMessages);
  } catch {
    res.sendStatus(500);
  }
};

const updateMessage = async (req, res) => {
  const existingMessage = await Message.findById(req.body.id);

  if (req.body.title) existingMessage.title = req.body.title;

  if (req.body.body) existingMessage.body = req.body.body;

  if (req.body.username) existingMessage.username = req.body.username;

  await existingMessage.save();
  const allMessages = await Message.find().sort({ updatedAt: -1 });
  res.json(allMessages);
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id is required" });

  const idExist = await Message.findById(id);
  if (!idExist) {
    return res.status(400).json({ message: "No message found" });
  }
  await Message.deleteOne({ _id: id });
  const allMessages = await Message.find().sort({ updatedAt: -1 });
  res.json(allMessages);
};

module.exports = {
  getAllMessages,
  createNewMessage,
  updateMessage,
  deleteMessage,
};

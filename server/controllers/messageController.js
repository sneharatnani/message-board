const Message = require("../model/Message.js");

const getAllMessages = async (req, res) => {
  const allMessages = await Message.find();
  res.json(allMessages);
};

const createNewMessage = async (req, res) => {
  const { title, body, user } = req.body;

  try {
    await Message.create({ title, body, user });
    const allMessages = await Message.find();
    res.status(201).json(allMessages);
  } catch {
    res.sendStatus(500);
  }
};

const updateMessage = async (req, res) => {
  const existingMessage = await Message.findById(req.body.id);

  if (req.body.title) existingMessage.title = req.body.title;

  if (req.body.body) existingMessage.body = req.body.body;

  if (req.body.user) existingMessage.user = req.body.user;

  await existingMessage.save();
  const allMessages = await Message.find();
  res.json(allMessages);
};

const deleteMessage = async (req, res) => {
  // const { id } = req.body;
  // if (!id) return res.sendStatus(400);
  // await Message.deleteOne({ id });
  // const allMessages = await Message.find();
  // res.json(allMessages);
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: "Id is required" });

  const idExist = await Message.findById(req.body.id);
  if (!idExist) {
    return res.status(400).json({ message: "No message found" });
  }
  await Message.deleteOne({ _id: id });
  const allMessages = await Message.find();
  res.json(allMessages);
};

module.exports = {
  getAllMessages,
  createNewMessage,
  updateMessage,
  deleteMessage,
};

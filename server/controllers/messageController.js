const Message = require("../model/Message.js");

const getAllMessages = async (req, res) => {
  const allMessages = await Message.find()
    .limit(req.query.limit)
    .skip(req.query.skip)
    .sort({ updatedAt: -1 });
  const numberOfDocs = await Message.countDocuments();
  res.status(200).json({ allMessages, numberOfDocs });
};

const createNewMessage = async (req, res) => {
  const { title, body, username } = req.body;

  try {
    const newMessage = { title, body, username };
    await Message.create(newMessage);
    res.status(201).json(newMessage);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};

const updateMessage = async (req, res) => {
  if (!req.body.id) return res.status(400).json({ message: "Id is required" });
  const oldMessage = await Message.findById(req.body.id);

  if (req.body.title) oldMessage.title = req.body.title;

  if (req.body.body) oldMessage.body = req.body.body;

  if (req.body.username) oldMessage.username = req.body.username;
  try {
    const result = await oldMessage.save();
    res.status(200).json(result);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id is required" });

  const idExist = await Message.findById(id);
  if (!idExist) {
    return res.status(404).json({ message: "No message found" });
  }
  try {
    await Message.deleteOne({ _id: id });
    res.status(200).json({ id });
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};

module.exports = {
  getAllMessages,
  createNewMessage,
  updateMessage,
  deleteMessage,
};

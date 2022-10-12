import { useEffect, useState } from "react";
import axios from "axios";
import Message from "./components/Message.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/")
      .then((response) => setMessages(response.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteMessage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3500/${id}`);
      setMessages(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const allMessages = messages.map((msg) => (
    <Message key={msg._id} {...msg} deleteMessage={deleteMessage} />
  ));

  return (
    <div className="App">
      <header className="header">
        <h1>Message Board</h1>
      </header>
      <main>
        <button className="new-msg-btn">new message</button>
        <div>{allMessages}</div>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import Message from "./components/Message.js";
import NewMsgBtn from "./components/NewMsgBtn.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/")
      .then((response) => setMessages(response.data))
      .catch((err) => console.error(err));
  }, []);

  const allMessages = messages.map((msg) => (
    <Message key={msg._id} {...msg} setMessages={setMessages} />
  ));

  return (
    <div className="App">
      <header className="header">
        <h1>Message Board</h1>
      </header>
      <main>
        <NewMsgBtn setMessages={setMessages} />
        <div>{allMessages}</div>
      </main>
    </div>
  );
}

export default App;

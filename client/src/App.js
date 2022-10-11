import { useEffect, useState } from "react";
import axios from "axios";
import Message from "./components/Message.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/")
      .then((response) => setMessages(response.data));
  }, []);
  console.log(messages);

  const allMessages = messages.map((msg) => (
    <Message
      key={msg._id}
      title={msg.title}
      body={msg.body}
      author={msg.author}
    />
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

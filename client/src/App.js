import { useEffect, useState } from "react";
import axios from "axios";
import Message from "./components/Message.js";
import NewMsgBtn from "./components/NewMsgBtn.js";
import useMessage from "./hooks/useMessage.js";

function App() {
  const [messages, setMessages] = useState([]);
  const [totalDocs, setTotalDocs] = useState(0);
  const [hasDocs, setHasDocs] = useState(true);
  const { getMessages, loadMoreMessages } = useMessage(
    setMessages,
    setTotalDocs
  );

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    if (messages.length < totalDocs) {
      setHasDocs(true);
    } else {
      setHasDocs(false);
    }
  }, [messages, totalDocs]);

  const messageComponents = messages.map((msg) => (
    <Message
      key={msg._id}
      {...msg}
      setMessages={setMessages}
      setTotalDocs={setTotalDocs}
    />
  ));

  return (
    <div className="App">
      <header className="header">
        <h1>Message Board</h1>
      </header>
      <main>
        <NewMsgBtn setMessages={setMessages} setTotalDocs={setTotalDocs} />
        <div>{messageComponents}</div>
        {hasDocs ? (
          <button onClick={() => loadMoreMessages(2, messages.length)}>
            Load more
          </button>
        ) : (
          <p>it is end</p>
        )}
      </main>
    </div>
  );
}

export default App;

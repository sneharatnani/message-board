import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home.js";
import New from "./pages/New.js";
import Edit from "./pages/Edit.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/")
      .then((response) => setMessages(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Message Board</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home messages={messages} setMessages={setMessages} />}
        />
        <Route path="/new" element={<New setMessage={setMessages} />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

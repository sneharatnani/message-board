import axios from "axios";
import { Link } from "react-router-dom";
import Message from "../components/Message.js";

export default function Home(props) {
  const { messages, setMessages } = props;

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
    <main>
      <Link to="/new" className="new-msg">
        new message
      </Link>
      <div>{allMessages}</div>
    </main>
  );
}

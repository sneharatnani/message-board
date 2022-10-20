import axios from "axios";
import BinIcon from "./icons/BinIcon.js";

export default function Bin({ _id, setMessages, setLoading }) {
  const deleteMessage = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/${id}`
      );
      await setMessages((prevMsg) =>
        prevMsg.filter((msg) => msg._id !== response.data.id)
      );
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <button className="bin" onClick={() => deleteMessage(_id)}>
      <BinIcon />
    </button>
  );
}

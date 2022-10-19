import axios from "axios";

export default function Bin({ _id, setMessages, setLoading }) {
  const deleteMessage = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:3500/${id}`);
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
      <svg
        className="binIcon"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Delete</title>
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"></path>
        </g>
      </svg>
    </button>
  );
}

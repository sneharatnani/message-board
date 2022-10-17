import { useState } from "react";
import Modal from "./Modal.js";
import axios from "axios";
import useMessage from "../hooks/useMessage.js";

export default function Pencil(props) {
  const { _id, setMessages, setTotalDocs, title, body, username } = props;

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    title,
    body,
    username,
  });
  const { getMessages } = useMessage(setMessages, setTotalDocs);

  const editMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3500", {
        ...values,
        id: _id,
      });
      getMessages();
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button className="pencil" onClick={() => setOpen(true)}>
        <svg
          className="pencilIcon"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Edit</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
      {open && (
        <Modal {...values} setValues={setValues} editMessage={editMessage} />
      )}
    </>
  );
}

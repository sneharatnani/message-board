import { useState } from "react";
import Modal from "./Modal.js";
import axios from "axios";

export default function NewMsgBtn({ setMessages }) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    title: "",
    body: "",
    username: "",
  });

  const createNewMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500", { ...values });
      await setMessages(response.data);
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button className="new-msg" onClick={() => setOpen(true)}>
        new message
      </button>
      {open && (
        <Modal
          setValues={setValues}
          createNewMessage={createNewMessage}
          {...values}
        />
      )}
    </>
  );
}

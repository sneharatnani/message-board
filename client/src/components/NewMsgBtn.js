import { useState } from "react";
import Modal from "./Modal.js";
import axios from "axios";
import useMessage from "../hooks/useMessage.js";

export default function NewMsgBtn({ setMessages, setTotalDocs }) {
  const [open, setOpen] = useState(false);
  const { getMessages } = useMessage(setMessages, setTotalDocs);
  const [values, setValues] = useState({
    title: "",
    body: "",
    username: "",
  });

  const createNewMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3500", { ...values });
      await getMessages();
      await setOpen(false);
      setValues({
        title: "",
        body: "",
        username: "",
      });
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

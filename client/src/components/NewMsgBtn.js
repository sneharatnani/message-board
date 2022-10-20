import { useState } from "react";
import Modal from "./Modal.js";
import axios from "axios";

export default function NewMsgBtn({ setLoading, getMessages }) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    title: "",
    body: "",
    username: "",
  });

  const createNewMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(process.env.REACT_APP_SERVER_URL, { ...values });
      await setOpen(false);
      getMessages();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        className="new-msg"
        onClick={() => {
          setValues({
            title: "",
            body: "",
            username: "",
          });
          setOpen(true);
        }}
      >
        new message
      </button>
      {open && (
        <Modal
          setValues={setValues}
          closeModal={() => setOpen(false)}
          createNewMessage={createNewMessage}
          {...values}
        />
      )}
    </>
  );
}

import Form from "../components/Form.js";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function New({ setMessage }) {
  const [value, setValue] = useState({
    title: "",
    body: "",
    username: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const createNewMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500", { ...value });
      await setMessage(response.data);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={createNewMessage}>
      <div className="input-container">
        <input
          placeholder="Title"
          required
          value={value.title}
          className="form-title"
          name="title"
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          required
          value={value.body}
          name="body"
          onChange={handleChange}
        />
        <input
          placeholder="Username"
          required
          value={value.username}
          className="form-username"
          name="username"
          onChange={handleChange}
        />
      </div>
      <button>Save</button>
    </form>
  );
}

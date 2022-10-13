import { useState } from "react";

export default function Form(props) {
  const [value, setValue] = useState({
    title: "",
    body: "",
    username: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("hello");
      }}
    >
      <div className="input-container">
        <input
          placeholder="Title"
          required
          value={value.title}
          className="form-title"
          name="title"
          onChange={change}
        />
        <textarea
          placeholder="Message"
          required
          value={value.body}
          name="body"
          onChange={change}
        />
        <input
          placeholder="Username"
          required
          value={value.username}
          className="form-username"
          name="username"
          onChange={change}
        />
      </div>
      <button>Save</button>
    </form>
  );
}

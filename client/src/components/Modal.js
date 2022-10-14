export default function Modal(props) {
  const { title, body, username, createNewMessage, editMessage, setValues } =
    props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <>
      <form className="modal" onSubmit={editMessage || createNewMessage}>
        <div className="input-container">
          <input
            placeholder="Title"
            required
            value={title}
            className="form-title"
            name="title"
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            required
            value={body}
            name="body"
            onChange={handleChange}
          />
          <input
            placeholder="Username"
            required
            value={username}
            className="form-username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <button>Save</button>
      </form>
      <div className="overlay"></div>
    </>
  );
}

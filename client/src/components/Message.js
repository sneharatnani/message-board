import Bin from "./Bin.js";
import Pencil from "./Pencil.js";

export default function Message(props) {
  const { title, body, username } = props;
  return (
    <div className="message">
      <h2 className="title">{title}</h2>
      <p className="body">{body}</p>
      <div className="msg-footer">
        <p className="username">
          By <span>{username}</span>
        </p>
        <div className="icon-container">
          <Bin {...props} />
          <Pencil {...props} />
        </div>
      </div>
    </div>
  );
}

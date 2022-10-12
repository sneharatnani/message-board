import Bin from "./Bin.js";
import Pencil from "./Pencil.js";

export default function Message(props) {
  const { title, body, author } = props;
  return (
    <div className="message">
      <h2 className="title">{title}</h2>
      <p className="body">{body}</p>
      <div className="msg-footer">
        <p className="author">
          By <span>{author}</span>
        </p>
        <div className="icon-container">
          <Bin {...props} />
          <Pencil />
        </div>
      </div>
    </div>
  );
}

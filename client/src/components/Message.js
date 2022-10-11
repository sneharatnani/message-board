export default function Message(props) {
  const { title, body, author } = props;
  return (
    <div className="message">
      <h2 className="title">{title}</h2>
      <p className="body">{body}</p>
      <p className="author">
        By <span>{author}</span>
      </p>
    </div>
  );
}

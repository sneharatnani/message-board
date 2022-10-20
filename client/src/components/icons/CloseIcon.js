export default function CloseIcon({ closeModal }) {
  return (
    <svg
      onClick={closeModal}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1.15em"
      width="1.15em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M3,3 L21,21 M3,21 L21,3"
      ></path>
    </svg>
  );
}

import PuffLoader from "react-spinners/PuffLoader.js";

export default function Loader({ loading }) {
  return (
    <div className="loader">
      <PuffLoader color="#009688" loading={loading} />
    </div>
  );
}

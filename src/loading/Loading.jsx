import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#red",
};

function Loading() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <ClipLoader
        color="green"
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;

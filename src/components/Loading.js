import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="spinner-border text-primary position-absolute top-50 start-50" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
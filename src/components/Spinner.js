import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="spinner mb-2"></div>
      <p>Loading....</p>
    </div>
  );
};

export default Spinner;

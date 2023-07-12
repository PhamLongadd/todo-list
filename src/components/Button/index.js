import "./index.css";
import React from "react";

function Button({ clearCompleted }) {
  return (
    <div className="wrapper-button">
      <button className="button" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default Button;

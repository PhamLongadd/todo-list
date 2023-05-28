import "./index.css";

function Button() {
  return (
    <div className="wrapper-button">
      <div className="button-left">
        <button className="button active">All</button>
        <button className="button">Active</button>
        <button className="button">Completed</button>
      </div>
      <div className="button-right">
        <button className="button">Clear Completed</button>
      </div>
    </div>
  );
}

export default Button;

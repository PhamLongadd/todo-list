import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  let count = 0;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, { text: inputValue }]);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="main-wrapper">
      <h3>Svelte Todo App</h3>
      <input
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="insert"
        type="text"
        placeholder="Insert todo item ..."
      />
      <ul>
        <div className="check-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <div>
                <input className="check todo" type="checkbox" />
                <span>{todo.text}</span>
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faXmark} />
              </div>
            </li>
          ))}
        </div>
      </ul>
      <div className="wrapper-check-all">
        <div className="check-all">
          <input className="check" type="checkbox" />
          <span>Check All</span>
        </div>
        <div className="check-all">
          <span>{count} items left</span>
        </div>
      </div>
    </div>
  );
}

export default Main;

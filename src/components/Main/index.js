import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./index.css";
import Button from "../Button";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const handleCheckboxChange = (index) => (event) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = event.target.checked;
    setTodos(newTodos);
  };

  const handleCheckboxAllChange = (e) => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      isCompleted: e.target.checked,
    }));
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, { text: inputValue, isCompleted: false }]);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRemoveTodo = (index) => () => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const numCompleted = todos.filter((todo) => todo.isCompleted).length;
    setCount(numCompleted);
  }, [todos]);

  return (
    <div className="main-wrapper">
      <h3>React Todo App</h3>
      <input
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="insert"
        type="text"
        placeholder="Insert todo item ..."
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div>
              <input
                className="check"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={handleCheckboxChange(index)}
              />
              <span>{todo.text}</span>
            </div>
            <FontAwesomeIcon
              className="icon"
              icon={faXmark}
              onClick={handleRemoveTodo(index)}
            />
          </li>
        ))}
      </ul>
      <div className="wrapper-check-all">
        <div>
          <input
            className="check"
            type="checkbox"
            onChange={handleCheckboxAllChange}
          />
          <span>Check All</span>
        </div>
        <span>{count} items left</span>
      </div>
      <Button clearCompleted={handleClearCompleted} />
    </div>
  );
}

export default Main;

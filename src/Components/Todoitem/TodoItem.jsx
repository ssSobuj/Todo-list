/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Todolist from "./Todolist/Todolist";
import "./TodoItem";
import { useId, useState } from "react";

export default function TodoItem() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [updet, setUpdet] = useState(true);
  const [iditid, seIditid] = useState(0);

  const inputHandeler = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodo([...todos, input]);
      setInput("");
    }
  };
  const deletTodo = (id) => {
    const filterTodo = todos.filter((todo, index) => index !== id);
    setTodo(filterTodo);
  };
  const iditTodo = (id) => {
    const findtodo = todos.find((val, ind) => ind === id);
    setInput(findtodo);
    seIditid(id);
    setUpdet(false);
  };

  const updateTodo = () => {
    todos[iditid] = input;
    setInput("");
    setUpdet(true);
  };
  

  const clearEnter = (e) => {
    if (e.key === "Enter") {
      setUpdet(true);
      addTodo();
    }
  };
  const UpdateEnter = (e) => {
    if (e.key === "Enter") {
      setUpdet(false);
      updateTodo()
    }
  };

  return (
    <>
      <div className="main">
        <Todolist
          input={input}
          inputHandeler={inputHandeler}
          addTodo={addTodo}
          todos={todos}
          deletTodo={deletTodo}
          iditTodo={iditTodo}
          updet={updet}
          updateTodo={updateTodo}
          clearEnter={clearEnter}
          UpdateEnter={UpdateEnter}
        />
      </div>
    </>
  );
}

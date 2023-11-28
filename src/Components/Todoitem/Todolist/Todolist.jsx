/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import "./Todolist.css";
import { ImPencil2 } from "react-icons/im";

import TodoLI from "./TodoLI";
import { useState } from "react";
// import { useState } from "react";

export default function Todolist({
  input,
  inputHandeler,
  addTodo,
  todos,
  deletTodo,
  updet,
  updateTodo,
  clearEnter,
  UpdateEnter,
  iditTodo
  
}) 

{ 

 


  return (
    <>
      <div className="container">
        <div className="input-sec">
          <i className="pencil">
            <ImPencil2 />
          </i>
          <input
            type="text"
            maxLength={42}
            value={input}
            onChange={inputHandeler}
            onKeyDown={updet ? clearEnter:UpdateEnter}
            placeholder="Write a new task"
          />
          <button onClick={updet ? addTodo : updateTodo} className="add-todo">
            {updet ? "Add todo" : "Update Todo"}
          </button>
        </div>
        <ul className="todo-ul">
          {todos.map((todo,index) => (
            <TodoLI deletTodo={deletTodo} 
            iditTodo={iditTodo} todo={todo} index={index}/>
          ))}
        </ul>
      </div>

      {/* <div className="Todo-sec">
        <div className="Todo-innet-sec">
                    <div className="Todo-input">
                      <input
                        className="input"
                        type="text"
                        placeholder="Write a new task"
                      />
                      <button
                        className="Todo-add-btn"
                      >
                      </button>
                      <i className="fa-pencil-square"></i>
                    </div>
                    <ul className="Todo-ul">
                      
                        <li key={'index'}>
                          <hr className="Ul-hr" />
                          <div className="Todo-list">
                            <div className="Todo-icons">
                              <span
                                className="Todo-icon-span"
                              >
                                <i
                                  className="Todo-icon-icon"
                                ></i>
                              </span>
                              <p className="Todo-list-p">
                                <strike
                                  id="strike1"
                                  className="Todo-list-strike"
                                >
                                  {''}
                                </strike>
                              </p>
                            </div>
                            <span
                              className="todo-list-edit"
                            >
                              <i className="todo-list-edit-icon"></i>
                            </span>
                            <span
                              className="todo-list-delet"
                            >
                              <i className="todo-list-delet-icon"></i>
                            </span>
                          </div>
                        </li>

                    </ul>
        </div>
      </div> */}
    </>
  );
}

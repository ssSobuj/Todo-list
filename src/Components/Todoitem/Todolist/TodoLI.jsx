/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6";
import { MdMovieEdit } from "react-icons/md";
import { TbTrashOff } from "react-icons/tb";
import { useState } from "react";


export default function TodoLI({
    deletTodo,
    iditTodo,
    todo,
    index
})


{
    
     const [complet, setComplet] = useState(false); 

  return (
    <li key={new Date().getMilliseconds()}>
    <hr />
    <div className="list">
      <div className="chek" onClick={() => setComplet(!complet)}>
        <span className="span">
          <FaCheck />
        </span>
      </div>
      {complet === true ? (
        <p
          style={{ textDecoration: "line-through" }}
          className="todos-p"
        >
          {todo}
        </p>
      ) : (
        <p className="todos-p">{todo}</p>
      )
      }

      <span onClick={() => iditTodo(index)} className="span chek">
        <MdMovieEdit />
      </span>
      <span className="span chek" onClick={() => deletTodo(index)}>
        <TbTrashOff />
      </span>
    </div>
  </li>
  )
}

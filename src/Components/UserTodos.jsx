import React from "react";
import Todo from "./Todo";
import { getAllUserTodos } from "../Utils/todosUtils";
import { useState, useEffect } from "react";

export default function UserTodos(props) {
  const [userTodos, setUserTodos] = useState([]);
  useEffect(() => {
    const fetchUserTodos = async () => {
      const resp = await getAllUserTodos(props.userId);
      console.log(resp);
      const firstThreeTodos = resp
        .slice(0, 3)
        .map(({ id, title, completed }) => ({
          id,
          title,
          completed,
        }));
      setUserTodos(firstThreeTodos);
    };
    fetchUserTodos();
  }, [props.userId]);
  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
      <h3>{`Todos - User ${props.userId}`}</h3>
      <button>Add</button>
      </div>
      <br />
      <div style={{border:`2px solid black`, padding:`3px`}}>
      {userTodos.map((todo) => (
        <Todo key={todo.id} id={todo.id} userId={props.userId} title={todo.title} completed={todo.completed} />
      ))}
      </div>
    </div>
  );
}

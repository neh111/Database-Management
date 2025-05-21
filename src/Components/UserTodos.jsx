import React from "react";
import Todo from "./Todo";
import AddNewTodo from "./AddNewTodo";
import { getAllUserTodos } from "../Utils/todosUtils";
import { useState, useEffect } from "react";

export default function UserTodos(props) {
  const [userTodos, setUserTodos] = useState([]);
  const [showTodosList, setShowTodosList] = useState(true);
  const [labelComponent,setLabelComponent]=useState("Todos");
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

  const handleAddTodo = () => {
    setShowTodosList(false);
    setLabelComponent("New Todo")
  };

  const handleCanacelAdd=()=>{
    setShowTodosList(true);
  }

  const markToDoAsCompleted = (todoId) => {
    setUserTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{`${labelComponent} - User ${props.userId}`}</h3>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <br />
      <div style={{ border: `2px solid black`, padding: `3px` }}>
        {showTodosList ? (
          userTodos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              userId={props.userId}
              title={todo.title}
              completed={todo.completed}
              markToDoAsCompleted={markToDoAsCompleted}
            />
          ))
        ) : (
          <AddNewTodo userId={props.userId} cancelAdd={handleCanacelAdd}/>
        )}
      </div>
    </div>
  );
}

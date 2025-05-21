import React, { useState } from "react";
import { addNewTodo } from "../Utils/todosUtils";

export default function AddNewTodo(props) {
  const [titleInput, setTitleInput] = useState("");

  const handleAddTodo = async () => {
    console.log("on handleAddTodo")
    const newTodo = {
      userId: props.userId,
      title: titleInput,
      completed: false,
    };
    const resp = await addNewTodo(newTodo);
    console.log("new todo resp is", resp)
  };

  const handleCancel=()=>{
    props.cancelAdd();
  }

  return (
    <div>
      Title:
      <input
        type="text"
        name="title"
        onChange={(event) => setTitleInput(event.target.value)}
      ></input>
      <br />
      <button style={{ backgroundColor: `yellow` }} onClick={handleCancel}>
        cancel
      </button>
      <button style={{ backgroundColor: `yellow` }}  onClick={handleAddTodo}>add</button>
    </div>
  );
}

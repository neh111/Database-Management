import React from "react";
import { updateCompletedTodo } from "../Utils/todosUtils";

export default function Todo(props) {

  const handleCompletedClicked= async ()=>{
      const resp = await updateCompletedTodo(props.userId,props.id);
      console.log(`the response for mark:${resp}`)
 }

  return (
    <div style={{ border: `solid purple 2px` }}>
      <label>Title:{props.title}</label>
      <br />
      <label>Completed:{props.completed.toString()}</label>
      {!props.completed && <button onClick={handleCompletedClicked}>Mark Completed</button>}
      {props.id}
    </div>
  );
}

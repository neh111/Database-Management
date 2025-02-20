import React from "react";
import { useState, useEffect } from "react";
import { getUserUncompletedTodos } from "../Utils/todosUtils";

export default function UserGlobalData(props) {
  const [borderColor, setBorderColor] = useState("");
  useEffect(() => {
    const fetchUncompletedTodos = async () => {
      const resp = await getUserUncompletedTodos(props.user?.id);
      const color = resp.length > 0 ? "red" : "green";
      setBorderColor(color);
    };
    fetchUncompletedTodos();
  }, []);
  return (
    <div style={{ border: `3px solid ${borderColor}` }}>
      <label>ID:{props.user?.id}</label>
      <label>Name:</label>
      <input type="text" placeholder={props.user?.name}></input>
      <label>Email:</label>
      <input type="text" placeholder={props.user?.email}></input>
      <button>Other Data</button>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import { getUserUncompletedTodos } from "../Utils/todosUtils";
import OtherData from "./OtherData";

export default function UserGlobalData(props) {
  const [borderColor, setBorderColor] = useState("");
  const [displayOtherData,setDisplayOtherData]=useState(false);
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
      <button onMouseOver={()=>setDisplayOtherData(true)} onClick={()=>setDisplayOtherData(false)}>Other Data</button>
      {displayOtherData && <OtherData userAddress={props.user?.address}/>}
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

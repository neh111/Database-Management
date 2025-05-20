import React from "react";
import { useState, useEffect } from "react";
import { getUserUncompletedTodos } from "../Utils/todosUtils";
import { updateUserData } from "../Utils/usersUtils";
import OtherData from "./OtherData";

export default function UserGlobalData(props) {
  const [borderColor, setBorderColor] = useState("");
  const [displayOtherData, setDisplayOtherData] = useState(false);
  const [backgroundColor,setBackgroundColor]=useState("white");
  const [userUpdatedData, setUserUpdatedData] = useState({
    name: props.user?.name || "",
    email: props.user?.email || "",
    street: props.user?.address.street || "",
    city: props.user?.address.city || "",
    zipCode: props.user?.address.zipCode || "",
  });
  const [userCurrentDetails, setUserCurrentDetails] = useState({
    name: props.user?.name || "",
    email: props.user?.email || "",
  });

  useEffect(() => {
    const fetchUncompletedTodos = async () => {
      const resp = await getUserUncompletedTodos(props.user?.id);
      const color = resp.length > 0 ? "red" : "green";
      setBorderColor(color);
    };
    fetchUncompletedTodos();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const resp = await updateUserData(props.user?.id, userUpdatedData);
    console.log(resp);
    //console.log(userUpdatedData);
    setUserCurrentDetails(userUpdatedData);
    props.handleUpdateFilteredUsers(props.user?.id,resp);
  };
  
  const handleIdClicked=()=>{
     setBackgroundColor("orange");
     props.handleUserTodos(props.user?.id);
  }

  return (
    <div style={{ border: `3px solid ${borderColor}`, backgroundColor:backgroundColor}}>
      <label onClick={handleIdClicked} style={{cursor:"pointer"}}>ID:{props.user?.id}</label>
      <br/>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        placeholder={userCurrentDetails.name}
        onChange={handleChange}
      ></input>
      <br/>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        placeholder={userCurrentDetails.email}
        onChange={handleChange}
      ></input>
      <br/>
      <button
        onMouseOver={() => setDisplayOtherData(true)}
        onClick={() => setDisplayOtherData(false)}
      >
        Other Data
      </button>
      {displayOtherData && (
        <OtherData
          userAddress={props.user?.address}
          handleChange={handleChange}
        />
      )}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => props.handleDelete(props.user?.id)}>Delete</button>
    </div>
  );
}

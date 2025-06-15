import React, { useState } from "react";
import { addNewUser } from "../Utils/usersUtils";

export default function AddNewUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCancel = () => {
    props.addUser(false);
  };

  const handleAdd = async () => {
    console.log("on add user")
    const newUser = {
      name: name,
      email: email,
    };
    const resp = await addNewUser(newUser);
    console.log("new user is",resp)
    props.addNewUser(resp)
    props.addUser(false)
  };
  return (
    <div>
      Add New User
      <div style={{ border: `1px solid black` }}>
        Name:<input onChange={(event) => setName(event.target.value)}></input>
        <br />
        Email:<input onChange={(event) => setEmail(event.target.value)}></input>
        <br />
        <button onClick={handleCancel}>cancel</button>
        <button onClick={handleAdd}>add</button>
      </div>
    </div>
  );
}

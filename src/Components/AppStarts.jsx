import React, { useState, useEffect } from "react";
import UserGlobalData from "./UserGlobalData";
import { getAllUsers, deleteUser } from "../Utils/usersUtils";

export default function AppStarts(props) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);
  useEffect(() => {
    setUsers(props.users);
    setFilteredUsers(props.users);
  }, [props.users]);

  useEffect(() => {
    console.log("Filtered Users Updated:", filteredUsers);
  }, [filteredUsers]);

  const handleUpdateFilteredUsers = (id, userCurrentDetails) => {
    console.log(
      `userCurrentDetails in AppStarts is ${JSON.stringify(userCurrentDetails)}`
    );
    setFilteredUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              name: userCurrentDetails.name,
              email: userCurrentDetails.email,
              address: {
                ...user.address,
                street: userCurrentDetails.street,
                city: userCurrentDetails.city,
                zipcode: userCurrentDetails.zipCode,
              },
            }
          : user
      )
    );
  };

  const handleSearch = (searchStr) => {
    const filteredUsers = users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(searchStr.toLowerCase()) ||
          user.email.toLowerCase().includes(searchStr.toLowerCase())
      )
      .filter((user) => !deletedUsers.includes(user.id));

    console.log(filteredUsers);
    setFilteredUsers(filteredUsers);
  };

  const handleDelete = async (userId) => {
    console.log("in delete users, the user id is:",userId)
    const resp = await deleteUser(userId);
    setDeletedUsers((prevDeletedUsers) => [...prevDeletedUsers, userId]);
    const filteredAfterDelete = filteredUsers.filter(
      (user) => user.id !== userId
    );
    setFilteredUsers(filteredAfterDelete);
    console.log(`filteredAfterDelete`);
    console.log(filteredAfterDelete);
  };

  const handleUserTodos=(userId)=>{
     props.showUserTodos(userId);
  }

const handleAddUser=()=>{
  props.setAddUser(true);
}

  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
      ></input>
      <button onClick={handleAddUser}>Add</button>
      {filteredUsers.map((user) => (
        <UserGlobalData
          key={user.id}
          user={user}
          handleDelete={handleDelete}
          handleUpdateFilteredUsers={handleUpdateFilteredUsers}
          handleUserTodos={handleUserTodos}
        />
      ))}
    </div>
  );
}

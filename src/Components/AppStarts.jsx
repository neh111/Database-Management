import React, { useState, useEffect } from "react";
import UserGlobalData from "./UserGlobalData";
import { getAllUsers } from "../Utils/usersUtils";

export default function AppStarts() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsersData = async () => {
      const resp = await getAllUsers();
      setUsers(resp);
    };
    getUsersData();
  }, []);

  return (
    <div>
      <label>Search</label>
      <input type="text"></input>
      <button>Add</button>
      {users.map((user) => (
        <UserGlobalData key={user.id} user={user} />
      ))}
    </div>
  );
}

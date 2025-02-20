import React, { useState, useEffect } from "react";
import UserGlobalData from "./UserGlobalData";
import { getAllUsers } from "../Utils/usersUtils";

export default function AppStarts() {
  const [users, setUsers] = useState([]);
  const [filteredUsers,setFilteredUsers]=useState([]);
  useEffect(() => {
    const getUsersData = async () => {
      const resp = await getAllUsers();
      setUsers(resp);
      setFilteredUsers(resp);
    };
    getUsersData();
  }, []);

  const handleSearch=(searchStr)=>{
      console.log(searchStr)
      const filteredUsers=users.filter(user=>
        user.name.toLowerCase().includes(searchStr.toLowerCase()) ||
        user.email.toLowerCase().includes(searchStr.toLowerCase())
      );
      console.log(filteredUsers)
      setFilteredUsers(filteredUsers)
  }

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={(event)=>handleSearch(event.target.value)}></input>
      <button>Add</button>
      {filteredUsers.map((user) => (
        <UserGlobalData key={user.id} user={user} />
      ))}
    </div>
  );
}

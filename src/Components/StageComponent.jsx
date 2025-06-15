import React, { useState,useEffect } from "react";
import AppStarts from "./AppStarts";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";
import AddNewUser from "./AddNewUser";
import { getAllUsers } from "../Utils/usersUtils";

export default function StageComponent() {
  const [allUsers, setAllUsers] = useState([]);
    const [userData,setUserData]=useState(false);
    const [addUser,setAddUser]=useState(false);
    const [userId,setUserId]=useState();

    useEffect(() => {
      const getUsersData = async () => {
        const resp = await getAllUsers();
        setAllUsers(resp);
        console.log("In StageComponent, the response is:",resp)
      };
      getUsersData();
    }, []);

    const showUserTodos=(id)=>{
       console.log(`user id: ${id}`)
       //setUserData(!userData)
       setUserData(true)
       setUserId(id)
    }

    const handleAddNewUser=(newUser)=>{
      setAllUsers((prevAllUsers) => [...prevAllUsers, newUser])
    }
  return (
    <div style={{display:"flex"}}>
      <AppStarts showUserTodos={showUserTodos} setAddUser={setAddUser} users={allUsers}/>
      <div>
      {userData && <UserTodos userId={userId}/>}
      {userData && <UserPosts userId={userId}/>}
      {addUser && <AddNewUser addUser={setAddUser} addNewUser={handleAddNewUser}/>}
      </div>
    </div>
  );
}

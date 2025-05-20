import React, { useState } from "react";
import AppStarts from "./AppStarts";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";

export default function StageComponent() {
    const [userData,setUserData]=useState(false);
    const [userId,setUserId]=useState();
    const showUserTodos=(id)=>{
       console.log(`user id: ${id}`)
       setUserData(true)
       setUserId(id)
    }
  return (
    <div style={{display:"flex"}}>
      <AppStarts showUserTodos={showUserTodos}/>
      <div>
      {userData && <UserTodos userId={userId}/>}
      {userData && <UserPosts userId={userId}/>}
      </div>
    </div>
  );
}

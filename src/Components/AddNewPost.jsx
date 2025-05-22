import React, { useState } from "react";
import { addNewPost } from "../Utils/postsUtils";

export default function AddNewPost(props) {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  const handleCancel = () => {
    props.cancelAdd();
  };

  const handleAddPost = async () => {
    const newPost = {
      userId: props.userId,
      title: titleInput,
      body: bodyInput,
    };
    const resp = await addNewPost(newPost);
    console.log("new post resp is", resp)
  };


  return (
    <div>
      Title:
      <input type="text" name="title" onChange={(e)=>setTitleInput(e.target.value)}></input>
      <br />
      Body:
      <input type="text" name="body" onChange={(e)=>setBodyInput(e.target.value)}></input>
      <br />
      <button style={{ backgroundColor: `yellow` }} onClick={handleCancel}>
        cancel
      </button>
      <button style={{ backgroundColor: `yellow` }} onClick={handleAddPost}>add</button>
    </div>
  );
}

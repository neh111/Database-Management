import React from "react";
import { useState, useEffect } from "react";
import { getAllUserPosts } from "../Utils/postsUtils";
import Post from "./post";
import AddNewPost from "./AddNewPost";

export default function UserPosts(props) {
  const [posts, setPosts] = useState([]);
  const [showPostsList, setShowPostsList] = useState(true);
  const [labelComponent, setLabelComponent] = useState("Posts");
  useEffect(() => {
    const fetchUserPosts = async () => {
      const resp = await getAllUserPosts(props.userId);
      console.log(resp);
      const firstThreePosts = resp
        .slice(0, 3)
        .map(({ id, title, body }) => ({ id, title, body }));
      setPosts(firstThreePosts);
      console.log(firstThreePosts);
    };
    fetchUserPosts();
  }, [props.userId]);

  const handleAddPost = () => {
    setShowPostsList(false);
    setLabelComponent("New Post");
  };

  const handleCanacelAdd=()=>{
    setShowPostsList(true);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{`${labelComponent} - User ${props.userId}`}</h3>
        <button onClick={handleAddPost}>Add</button>
      </div>
      <div style={{ border: `2px solid black`, padding: `3px` }}>
        {showPostsList ? (
          posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <AddNewPost cancelAdd={handleCanacelAdd} userId={props.userId}/>
        )}
      </div>
    </div>
  );
}

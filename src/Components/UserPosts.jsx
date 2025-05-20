import React from "react";
import { useState, useEffect } from "react";
import { getAllUserPosts } from "../Utils/postsUtils";
import Post from "./post";

export default function UserPosts(props) {
  const [posts, setPosts] = useState([]);
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
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{`Posts - User ${props.userId}`}</h3>
        <button>Add</button>
      </div>
      <div style={{ border: `2px solid black`, padding: `3px` }}>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

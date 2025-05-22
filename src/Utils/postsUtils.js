import axios from "axios";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const getAllUserPosts = async (userId) => {
    const resp = await axios.get(`${postsUrl}?userId=${userId}`);
    return resp.data;
};

const addNewPost=async(newPost)=>{
    const resp=await axios.post(postsUrl,newPost);
    return resp.data;
  }

export {getAllUserPosts,addNewPost};
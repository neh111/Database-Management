import axios from "axios";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const getAllUserPosts = async (userId) => {
    const resp = await axios.get(`${postsUrl}?userId=${userId}`);
    return resp.data;
};


export {getAllUserPosts};
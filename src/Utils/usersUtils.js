import axios from "axios";

const usersUrl="https://jsonplaceholder.typicode.com/users";


const getAllUsers = async ()=>{
    const resp = await axios.get(usersUrl);
    return resp.data;
}

export {getAllUsers};
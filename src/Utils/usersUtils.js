import axios from "axios";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = async () => {
  const resp = await axios.get(usersUrl);
  return resp.data;
};

const updateUserData = async (userId, updatedData) => {
  const resp = await axios.put(`${usersUrl}/${userId}`, updatedData);
  return resp.data;
};

const deleteUser = async (userId) => {
  const resp = await axios.delete(`${usersUrl}/${userId}`);
  console.log(resp.status);
  return resp.data;
};

export { getAllUsers, updateUserData, deleteUser };

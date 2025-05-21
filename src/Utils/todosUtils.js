import axios from "axios";

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

const getUserUncompletedTodos = async (userId) => {
  const resp = await axios.get(`${todosUrl}?userId=${userId}`);
  const uncompletedTodos = resp.data.filter((todo) => !todo.completed);
  return uncompletedTodos;
};

const getAllUserTodos = async (userId) => {
    const resp = await axios.get(`${todosUrl}?userId=${userId}`);
    return resp.data;
};

const updateCompletedTodo= async (userId,todoId)=>{
   const resp= await axios.put(`${todosUrl}/${todoId}`,{userId: userId,
    completed: true});
    console.log("the response for mark:",resp.data)
    return resp.data;
};

const addNewTodo=async(newTodo)=>{
  const resp=await axios.post(todosUrl,newTodo);
  return resp.data;
}

export { getUserUncompletedTodos , getAllUserTodos, updateCompletedTodo, addNewTodo};

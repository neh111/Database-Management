import axios from "axios";

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

const getUserUncompletedTodos = async (userId) => {
    const resp = await axios.get(`${todosUrl}?userId=${userId}`);
    const uncompletedTodos=resp.data.filter(todo=>!todo.completed)
    return uncompletedTodos;
};


export {getUserUncompletedTodos};
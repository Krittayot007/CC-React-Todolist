import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8080';

export const deleteTodoAPI = async(todoId) => axios.delete(`/todos/${todoId}`);

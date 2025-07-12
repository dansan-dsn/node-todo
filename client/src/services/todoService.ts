import axios from "axios";
import { TodoInfo } from "../types/todo";

const baseUrl = "http://localhost:5005/api/todo";

/*
 * Create, Fetch, Update, Delete a new todo item
 * @params todo, the Todo item to create, id
 * @returns
 */

export class TodoServices {
  static createTodo = (todo: Partial<TodoInfo>) => {
    return axios.post(`${baseUrl}/create`, todo);
  };

  static fetchTodos = () => {
    return axios.get(`${baseUrl}/`);
  };

  static fetchTodo = (id: string | number) => {
    return axios.get(`${baseUrl}/${id}/`);
  };

  static updateTodos = (id: string | number, todo: Partial<TodoInfo>) => {
    return axios.put(`${baseUrl}/update/${id}/`, todo);
  };

  static deleteTodos = (id: string | number) => {
    return axios.delete(`${baseUrl}/remove/${id}/`);
  };
}
